const commands = {
help: () => `Available commands:\nabout, projects, email, resume, linkedin, github, repo, whoami,\necho, date, google, randomtip, codingchallenge, motivation, banner, quote, sumfetch, help, clear`,
  about: () => `Final-year B.Tech Computer Science student at KIIT University with a solid foundation in C, C++, Java, and Python. Skilled in Data Structures and Algorithms, with a growing interest in full-stack development using HTML, CSS, JavaScript, and ReactJS. Passionate about learning and staying updated in the dynamic tech landscape.`,
  projects: () => `1. ToDo App – Full-stack task manager (Spring Boot + HTML/CSS/JS).\n   GitHub: https://github.com/duttaNeel/todoapp\n   Live: https://todoapp-oo0w.onrender.com\n2. CLI Portfolio (this project)\n   Repo: https://github.com/duttaNeel/cli-portfolio` ,
  email: () => `📧 duttaneel004@gmail.com` ,
  resume: () => '<a href="/resume.pdf" target="_blank" style="color:#00ff00">Click to view my resume</a>',
  linkedin: () => '<a href="https://www.linkedin.com/in/arkaparna-dutta-426b56227" target="_blank" rel="noreferrer" style="color:#00ff00">LinkedIn</a>',
  github: () => '<a href="https://github.com/duttaNeel" target="_blank" rel="noreferrer" style="color:#00ff00">GitHub</a>',
  repo: () => '<a href="https://github.com/duttaNeel?tab=repositories" target="_blank" rel="noreferrer" style="color:#00ff00">My GitHub Repositories</a>',
  whoami: () => `Arkaparna Dutta – Final Year CSE Student | Web Developer`,
  sumfetch: () => `<pre style="color:#00ff00;margin:0;">┌────────────────────────────────────────┐
│ Name:    Arkaparna Dutta               │
│ Role:    Web Developer                 │
│ Tech:    C, C++, Java, Python          │
│          HTML, CSS, JS, ReactJS        │
│          Bootstrap                     │
│ GitHub:  github.com/duttaNeel          │
└────────────────────────────────────────┘</pre>` ,
  banner: () => "<pre style='color:#00ff00;font-size:1.2em;'>Welcome to Arko's Portfolio CLI 🚀</pre>",
  quote: () => {
    const quotes = [
      '"Code is like humor. When you have to explain it, it’s bad." — Cory House',
      '"First, solve the problem. Then, write the code." — John Johnson',
      '"Experience is the name everyone gives to their mistakes." — Oscar Wilde',
      '"Simplicity is the soul of efficiency." — Austin Freeman',
      '"Before software can be reusable it first has to be usable." — Ralph Johnson',
      '"Fix the cause, not the symptom." — Steve Maguire',
      '"Optimism is an occupational hazard of programming: feedback is the treatment." — Kent Beck',
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  },
  // New commands below
  echo: (args = []) => args.length === 0 ? '' : args.join(' '),
  date: () => (new Date()).toString(),
  google: (args = []) => args.length === 0 ?
    '<a href="https://www.google.com" target="_blank" style="color:#00ff00">Open Google</a>' :
    `<a href="https://www.google.com/search?q=${encodeURIComponent(args.join(' '))}" target="_blank" style="color:#00ff00">Google Search: ${args.join(' ')}</a>`,
  // Removed weather command
  randomtip: () => {
    const tips = [
      "Always keep your functions small and focused on a single task.",
      "Write code as if the person who ends up maintaining it will be a violent psychopath who knows where you live.",
      "Use meaningful variable and function names for better readability.",
      "Remember: null and undefined are not the same in JavaScript!",
      "Comment why something is done, not what is done.",
      "Use version control! Commit early, commit often.",
      "Practice writing pseudocode before you start coding.",
      "DRY: Don’t Repeat Yourself — reuse functions and logic.",
      "Check for off-by-one errors in your loops.",
      "Know the time/space complexity of your algorithms.",
      "Prefer === over == in JavaScript for strict equality.",
    ];
    return tips[Math.floor(Math.random() * tips.length)];
  },
  codingchallenge: () => {
    const challenges = [
      "Reverse a string without using built-in reverse methods.",
      "Write a function to determine if a number is prime.",
      "Find the first non-repeating character in a string.",
      "Implement a simple stack and its push/pop operations.",
      "Write a function that sums all numbers from 1 to N.",
      "Sort an array of numbers without using the sort function.",
      "Write a function to check if a string is a palindrome.",
      "Implement the Fibonacci sequence iteratively.",
      "Given an array, return its maximum subarray sum (Kadane’s Algorithm).",
      "Find the intersection of two arrays.",
    ];
    return `💡 Coding Challenge: ${challenges[Math.floor(Math.random() * challenges.length)]}`;
  },
  motivation: () => {
    const ascii = `    _______    \n   |       |\n   |  <^>  |\n   |_______|\n     / | \\\n`;
    const quotes = [
      "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer",
      "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
      "The best way to get started is to quit talking and begin doing. — Walt Disney",
      "Opportunities don't happen, you create them. — Chris Grosser",
      "Productivity is never an accident. — Paul Meyer",
      "Code today so tomorrow you can build what you dream.",
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return `<pre style='color:#00ff00'>${ascii}</pre>\n🚀 ${quote}`;
  },
  clear: () => null
};

export default commands;
