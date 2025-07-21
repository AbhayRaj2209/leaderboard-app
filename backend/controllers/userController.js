const User = require('../models/User');
const History = require('../models/History');

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.json(user);
};

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const randomPoints = Math.floor(Math.random() * 10) + 1; // points score

  const user = await User.findById(userId);
  user.totalPoints += randomPoints;
  await user.save();

  const history = new History({ userId, points: randomPoints });
  await history.save();

  res.json({ user, points: randomPoints });
};

exports.getHistory = async (req, res) => {
  const history = await History.find().populate('userId').sort({ claimedAt: -1 });
  res.json(history);
};
