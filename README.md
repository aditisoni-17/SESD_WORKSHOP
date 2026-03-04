# 🚀 SmartCLI – SESD Workshop CLI Tool

## 📌 Overview

**SmartCLI** is a custom Command Line Interface (CLI) tool built using **Node.js and TypeScript**.
It provides multiple useful developer utilities such as greeting users, performing calculator operations, fetching weather data, generating quotes and jokes, creating GitHub repositories, generating full-stack project structures, and automating Git workflows.

The project follows **Object-Oriented Programming (OOP)** principles and uses a **Command Pattern architecture** to organize commands efficiently.

---

# 🛠️ Technologies Used

* Node.js
* TypeScript
* Commander.js
* Axios
* Git & GitHub CLI
* Express.js
* React (project generator)
* dotenv
* cors

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/aditisoni-17/SESD_WORKSHOP.git
```

Navigate into the project:

```
cd SESD_WORKSHOP
```

Install dependencies:

```
npm install
```

Build the project:

```
npm run build
```

Link CLI globally:

```
npm link
```

Now the CLI command **`mycli`** will work globally in your terminal.

---

# 📂 Project Structure

```
src
│
├── CLI_ENGINE
│   └── cli_engine.ts
│
├── commands
│   ├── greet_cmd.ts
│   ├── calculator_cmd.ts
│   ├── quote_cmd.ts
│   ├── joke_cmd.ts
│   ├── weather_cmd.ts
│   ├── typescript_tool.ts
│   ├── squash_cmd.ts
│   ├── create_repo_cmd.ts
│   ├── fullstack_setup_cmd.ts
│   └── step_commit_cmd.ts
│
└── cli.ts
```

---

# ⚡ Available Commands

| Command                            | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| `mycli greet <name>`               | Greets the user                             |
| `mycli add <n1> <n2>`              | Adds two numbers                            |
| `mycli sub <n1> <n2>`              | Subtracts two numbers                       |
| `mycli mult <n1> <n2>`             | Multiplies two numbers                      |
| `mycli divide <n1> <n2>`           | Divides two numbers                         |
| `mycli quote`                      | Generates a random quote                    |
| `mycli joke`                       | Generates a random joke                     |
| `mycli weather <city>`             | Shows current weather of a city             |
| `mycli create-repo <name>`         | Creates and connects a GitHub repository    |
| `mycli create-fullstack <project>` | Generates a full-stack React + Node project |
| `mycli squash <count>`             | Squashes last N git commits                 |
| `mycli step-commit`                | Allows interactive step-by-step commits     |
| `mycli typescript-tool <name>`     | Generates a TypeScript project setup        |

---

# 🌐 API Integrations

The CLI integrates with multiple APIs:

1. **Weather API**

   * OpenWeatherMap
   * Used for fetching weather data

2. **Quote API**

   * ZenQuotes API
   * Used for generating random quotes

3. **Joke API**

   * Official Joke API
   * Used for generating random jokes

---

# 🧠 Design Approach

The project uses:

* **Object-Oriented Programming**
* **Command Pattern**
* **Modular CLI Architecture**

Each command is implemented as an independent class and registered dynamically by the CLI engine.

---

# 🚀 Example Usage

```
mycli greet Aditi
```

```
mycli add 10 5
```

```
mycli weather Pune
```

```
mycli create-fullstack myapp
```

```
mycli create-repo testrepo
```

---

# ⭐ Features

* Modular CLI architecture
* OOP-based command system
* API integrations
* Git automation commands
* Full-stack project scaffolding
* Developer productivity utilities

---

# 👩‍💻 Author

**Aditi Soni**

GitHub:
https://github.com/aditisoni-17

---

# 📜 License

This project was developed as part of the **SESD Workshop CLI Project Submission**.
