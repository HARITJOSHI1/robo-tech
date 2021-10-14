import React from "react";

const ContactUs = () => {
  return (
    <div className="site-content reveal-from-bottom">
      <div
        style={{
          textAlign: "center",
          marginTop: "6rem",
        }}
      >
        <h1>Contact us </h1>
        <p style={{ fontSize: ".9rem" }}>
          You guys can contact either of the coordinators for any sorts of
          issues or queries regarding the event.
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Nishant: <span style={{ color: "white" }}>9910814601</span> &nbsp;
            &nbsp; Harit: <span style={{ color: "white" }}>9205669104</span>{" "}
            &nbsp; &nbsp; Piyush:{" "}
            <span style={{ color: "white" }}>9999290571</span> &nbsp; &nbsp;
          </div>
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5rem",
        }}
      >
        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1rem",
            borderRadius: "3px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6B6DFF"
            style={{ width: "40%", height: "40%", margin: "0" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
          <h4 style={{ marginBottom: ".5rem" }}>Message</h4>
          <p style={{ fontSize: ".84rem", textAlign: "center" }}>
            You can message us on whatsapp or text on the numbers reagarding to
            the event.
          </p>
        </div>

        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1rem",
            borderRadius: "3px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6B6DFF"
            style={{ width: "40%", height: "40%", margin: "0" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h4 style={{ marginBottom: ".5rem" }}>Support</h4>
          <p style={{ fontSize: ".84rem", textAlign: "center" }}>
            You can also contact our support team through robotechipec.org.in
            email address to get the info for event.
          </p>
        </div>

        {/* <ContactOpts
          container={{
            width: "15%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1rem",
            borderRadius: "3px",
          }}
          svgops={{
            path: "../../assets/images/contactUsSvg1.svg",
            width: "40%",
            height: "40%",
            margin: "0",
          }}
          headingopts={{ marginBottom: ".5rem" }}
          paraops={{ fontSize: ".84rem", textAlign: "center" }}
        >
          lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
          amet, consectetur
        </ContactOpts> */}

        <div
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "1rem",
            borderRadius: "3px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#6B6DFF"
            style={{ width: "40%", height: "40%", margin: "0" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
            />
          </svg>
          <h4 style={{ marginBottom: ".5rem" }}>Accounts</h4>
          <p style={{ fontSize: ".84rem", textAlign: "center" }}>
            For offline payment regarding details you can visit to our accounts
            department.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
