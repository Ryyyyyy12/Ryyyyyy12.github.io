import { ArrowDownwardRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{ fontFamily: "Kanit" }}
      id="contact"
    >
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <h1>Get In Touch</h1>
        <div className="w-6/12">
          <p className="indent-8">
            I'm looking for new opportunities, If you got a question, proposal,
            project or want to work together on something? Feel free to reach
            out.
          </p>
        </div>
        <ArrowDownwardRounded
          sx={{ fontSize: "40px" }}
          className="animate-bounce"
        />
      </Stack>
    </div>
  );
}

export default Contact;
