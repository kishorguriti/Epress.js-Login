const MyusersModel = require("../model/myusers");
const { findById } = require("../model/myusers");

var _ = require("lodash");

let getUsers = function (req, res, next) {
  MyusersModel.find({}, function (err, data) {
    return res.send(data);
  });
};

let createUser = function (req, res, next) {
  MyusersModel.findOne({ email: req.body.email }, function (err, userExist) {
    if (err) {
      res.status(422).send({ err: "error" });
    } else {
      if (!userExist) {
        let user = new MyusersModel(req.body);
        user.save(function (err, data) {
          if (err) {
            res.status(422).send({ err: "error occurred when creating user" });
          } else {
            res.send(data);
          }
        });
      } else {
        res.status(422).send({ err: "user already exist" });
      }
    }
  });
};

let DeleteUser = function (req, res, next) {
  let id = _.get(req, "params.id", null);

  MyusersModel.findByIdAndDelete(id, function (err, data) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.send(data);
    }
  });
};

const UpdateUser = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  MyusersModel.findByIdAndUpdate(id, body, function (err, data, id) {
    if (err) {
      res.send(id);
    } else {
      res.send(data);
    }
  });
};

const getSingleUser = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  MyusersModel.findById(id, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
};

module.exports = {
  getUsers,
  createUser,
  DeleteUser,
  UpdateUser,
  getSingleUser,
};
