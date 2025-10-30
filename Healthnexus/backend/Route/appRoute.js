const express = require('express');
const appModel = require('../Model/appModel');
const patientModel = require('../Model/patientModel');   
const doctorModel = require('../Model/doctorModel');     
const sendMail = require('../utils/sendMail');         

const appRoute = express.Router();


appRoute.get('/', async (req, res) => {
  try {
    const app = await appModel.find().populate("pid").populate("did");
    res.json({ "msg": "Success", value: app });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.post('/', async (req, res) => {
  try {
    const app = new appModel(req.body);
    await app.save();

    const patient = await patientModel.findById(app.pid);
    const doctor = await doctorModel.findById(app.did);

    if (patient && doctor) {
      await sendMail(
        patient.email,
        "Your Appointment Request Has Been Received",
        `
        Dear ${patient.name},

        We have received your appointment request. The details are as follows:

        • Doctor: Dr. ${doctor.name}  
        • Date: ${app.date}  
        • Time: ${app.slot}  
        • Status: Pending Approval  

        Our team will review your request shortly. You will receive another email once your appointment is confirmed.  

        Thank you for choosing our services.  

        Sincerely,  
        The Healthnexus Team
        `
      );
    }

    res.json({"msg": "Success", value: app });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const conapp = await appModel.findByIdAndUpdate(id, req.body, { new: true }).populate("pid").populate("did");

    if (req.body.status === "confirmed") {
      await sendMail(
        conapp.pid.email,
        "Your Appointment Has Been Confirmed",
        `
        Dear ${conapp.pid.name},

        Your appointment has been successfully confirmed. Please find the details below:

        • Doctor: Dr. ${conapp.did.name}  
        • Date: ${conapp.date}  
        • Time: ${conapp.slot}  
        • Status: Confirmed  

        Kindly arrive at the clinic at least 10 minutes before your scheduled time.  
        If you need to reschedule, please contact our office in advance.  

        Wishing you good health,  
        The Healthnexus Team
        `
      );
    }

    if (req.body.status === "cancelled") {
      await sendMail(
        conapp.pid.email,
        "Reschedule Request for Your Appointment",
        `
        Dear ${conapp.pid.name},

        We hope this message finds you well.  
        Unfortunately, it will not be possible to hold your appointment with Dr. ${conapp.did.name}  
        on ${conapp.date} at ${conapp.slot} as originally scheduled.  

        We sincerely apologize for this change and any inconvenience it may cause.  
        We kindly request you to reschedule your appointment at a time that works best for you.  

        Please use our booking system or contact our support team,  
        and we will gladly assist you in finding the earliest available slot.  

        Thank you for your understanding and cooperation.  

        Warm regards,  
        The Healthnexus Team
        `
      );
    }

    res.json({ "msg": "Success", value: conapp });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await appModel.findByIdAndDelete(id);
    res.json({ "msg": "Success" });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.get('/p/:pid', async (req, res) => {
  try {
    const pid = req.params.pid;
    const app = await appModel.find({ pid }).populate("pid").populate("did");
    res.json({ "msg": "Success", value: app });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.get('/d/:did', async (req, res) => {
  try {
    const did = req.params.did;
    const app = await appModel.find({ did }).populate("pid").populate("did");
    res.json({ msg: "Success", value: app });
  } catch (error) {
    res.json({ "msg": error });
  }
});


appRoute.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const app = await appModel.findById(id).populate("pid").populate("did");
    res.json({ msg: "Success", value: app });
  } catch (error) {
    res.json({ "msg": error });
  }
});

module.exports = appRoute;
