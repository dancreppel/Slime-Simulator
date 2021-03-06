import HelpWindow from './help_window';

export default class MainView {
  constructor () {
    // default to false
    this.mounted = false;

    this.main = document.createElement("div");
    this.main.className = "main-div";

    this.welcome = document.createElement("h1");
    this.welcome.className = "welcome-message";
    this.welcome.innerHTML = "Welcome to Slime Simulator!";
    this.main.appendChild(this.welcome);

    // game description
    this.description = document.createElement("p");
    this.description.innerHTML =
      "In this oasis, you live as the weakest" +
      " creature, a slime.  However, fortune has smiled on you.  Now you can" +
      " consume your enemies.  Grow until you become the new king of the oasis!";
    this.main.appendChild(this.description);

    this.help = new HelpWindow();
    this.help.appendTo(this.main);

    this.startMessage = document.createElement("p");
    this.startMessage.className = "start-message";
    this.startMessage.innerHTML = "Press ENTER to start game.";
    this.main.appendChild(this.startMessage);

    this.enterHandler = (e) => {
      if (e.key === "Enter") {
        localStorage.setItem("state", "play");
      }
    };
  }

  mount () {
    if (localStorage.state === 'main' && !this.mounted) {
      this.mounted = true;
      document.body.appendChild(this.main);
      document.addEventListener("keydown", this.enterHandler);
    }
  }

  unmount () {
    if (localStorage.state === 'play' && this.mounted) {
      this.mounted = false;
      document.body.removeChild(this.main);
      document.removeEventListener("keydown", this.enterHandler);
    }
  }
}