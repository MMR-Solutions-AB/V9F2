/* ------------ LABELS ------------ */
// Alla våra referencer till label elementerna
let usernameLabel = document.getElementById("username-label");
let emailLabel = document.getElementById("email-label");
let passwordLabel = document.getElementById("password-label");
let confirmPasswordLabel = document.getElementById("confirm-password-label");
let termsLabel = document.getElementById("agree-label");

/* ------------ INPUT & FORM ------------ */
// Alla våra referencer till input elementerna samt till vår form
let username = document.getElementById("username-input");
let email = document.getElementById("email-input");
let password = document.getElementById("password-input");
let confirmPassword = document.getElementById("confirm-password-input");
let terms = document.getElementById("agree");
let form = document.querySelector("form");

/* ------------ VALIDATION FUNCTION ------------ */
// Vår validering funktion, som kollar att alla värden stämmer överäns med vad vi vill skicka till backend
const validate = () => {
  // Vi använder isValid som boolean in vår if sats i eventListener på rad 66
  let isValid = true;

  // Vi kollar username värdets längd, vi vill att username minst ska vara 6 bokstäver långt
  // OBS! Vilken innebär att vi inte behöver kolla efter ett tomt värde då vi letar efter värdets längd.
  if (username.value.length < 6) {
    // Vi använder våra labels för att ge dem nödvändig information om validering
    usernameLabel.textContent = "username requires min 6 characters";
    isValid = false;
  } else {
    // Vi använder label återigen och sätter den till null (inget värde) om valideringen godkänner värdet.
    usernameLabel.textContent = null;
  }

  // Vi kollar om email värdet är en tom sträng eller inte, om den är en tom sträng retunerar det false i (thruty and falsy) tvärtom fall värdet innehåller mer en 1 bokstav
  // OBS! Vi kollar efter false, dvs tom sträng. Då vill vi hantera det med en notis i label.
  if (!email.value) {
    emailLabel.textContent = "email is required";
    isValid = false;
  } else {
    emailLabel.textContent = null;
  }

  if (password.value.length < 8) {
    passwordLabel.textContent = "password is required";
    isValid = false;
  } else {
    passwordLabel.textContent = null;
  }

  if (password.value != confirmPassword.value) {
    confirmPasswordLabel.textContent = "password is not matching";
    isValid = false;
  } else {
    confirmPasswordLabel.textContent = null;
  }

  // Vi kollar om vårt input type[checkbox] är checked (i kryssad)

  if (!terms.checked) {
    isValid = false;
    termsLabel.style.color = "red";
  } else {
    termsLabel.style.color = "#000";
  }

  return isValid;
};

/* ------------ POST FUNCTION ------------ */

/* ------------ SUBMIT FUNCTION ------------ */

form.addEventListener("submit", (e) => {
  // Prevents default gör att hemsidan inte uppdateras och vår funktionallitet går förlorad
  e.preventDefault();

  // If satsen i vår submit funktion, om allt är validerat så gå vidare med funktionen annars ingenting.
  if (validate()) {
    const formValue = {
      name: username.value,
      email: email.value,
      password: password.value,
      createdAt: Date(),
    };
    postUser(formValue);
    // Resets vår form (tar bort all gamal input) efter sunit. OBS! Inbyggd javascripts funktion
    form.reset();
  }
});

/* http://localhost:3000/users */

/* FETCH ALL USERS WTIH GET METHOD */
// OBS! VI BEHÖVER INTE SPECIFICIERA METHOD GET
const getAllUsers = async () => {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
};

/* FETCH ONE USER WITH ID */
const getUser = async () => {
  const response = await fetch("http://localhost:3000/users/3");
  const data = await response.json();
  console.log(data);
};


/* POST USER TO BACKEND WITH POST METHOD */
const postUser = async (data) => {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/* UPDATE USER WITH PATCH METHOD */
// COULD MAKE DYNAMIC PATH
const updateUser = async (id, data) => {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

/* updateUser() */
