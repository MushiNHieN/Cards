//#region db connection
  //score retrieve and show
  fetch("/api/scores")
    .then((response) => response.json())
    .then((data) => {
      data.scores.forEach((score) => {
        const li = document.createElement("li");
        li.innerHTML = `<i>${score.user_id}</i> - ${score.score} - ${score.timestamp}`;
        highScoreContainer.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching scores:", error));

  // user register
  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const registerName = document.getElementById("registerName").value;
      const registerEmail = document.getElementById("registerEmail").value;
      const registerPassword =
        document.getElementById("registerPassword").value;
      console.log(registerName, registerEmail, registerPassword);
      const data = {
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      };

      fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log("Error: " + data.error);
          } else {
            console.log("User registered with ID: " + data.id);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  // user login
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const loginEmail = document.getElementById("loginEmail").value;
      const loginPassword = document.getElementById("loginPassword").value;
      console.log(loginEmail, loginPassword);
      const data = { email: loginEmail, password: loginPassword };

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log("Error: " + data.error);
          } else {
            console.log("Login successful");
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

  //Retrieve user info
  async function retrieveUserInfo() {
    try {
      const response = await fetch("/profile");
      const data = await response.json();
      if (data.error) {
        console.error("Error:", data.error);
        return null;
      } else {
        return data;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  logoutButton.addEventListener("click", () => {
    fetch("/logout", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  });