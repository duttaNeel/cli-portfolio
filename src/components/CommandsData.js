const commands = {
help: () => `Available commands:\nabout, projects, email, resume, linkedin, github, repo, whoami,\necho, date, google, weather, banner, quote, sumfetch, help, clear`,
  about: () => `Final-year B.Tech Computer Science student at KIIT University with a solid foundation in C, C++, Java, and Python. Skilled in Data Structures and Algorithms, with a growing interest in full-stack development using HTML, CSS, JavaScript, and ReactJS. Passionate about learning and staying updated in the dynamic tech landscape.`,
  projects: () => `1. ToDo App – Full-stack task manager (Spring Boot + HTML/CSS/JS).\n   GitHub: https://github.com/duttaNeel/todoapp\n   Live: https://todoapp-oo0w.onrender.com\n2. CLI Portfolio (this project)\n   Repo: https://github.com/duttaNeel/cli-portfolio` ,
  email: () => `📧 duttaneel004@gmail.com` ,
  resume: () => '<a href="/resume.pdf" target="_blank" style="color:#00ff00">Click to view my resume</a>',
  linkedin: () => '<a href="https://www.linkedin.com/in/arkaparna-dutta-426b56227" target="_blank" rel="noreferrer" style="color:#00ff00">LinkedIn</a>',
  github: () => '<a href="https://github.com/duttaNeel" target="_blank" rel="noreferrer" style="color:#00ff00">GitHub</a>',
  repo: () => '<a href="https://github.com/duttaNeel?tab=repositories" target="_blank" rel="noreferrer" style="color:#00ff00">My GitHub Repositories</a>',
  whoami: () => `Arkaparna Dutta – Final Year CSE Student | Web Developer`,
  sumfetch: () => `<pre style="color:#00ff00;margin:0;">┌────────────────────────────────────────┐\n│ Name:    Arkaparna Dutta             │\n│ Role:    Web Developer                │\n│ Tech:    C, C++, Java, Python         │\n│          HTML, CSS, JS, ReactJS       │\n│          Bootstrap                    │\n│ GitHub:  github.com/duttaNeel         │\n└────────────────────────────────────────┘</pre>` ,
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
  weather: (args = []) => `Weather for ${args.length > 0 ? args.join(' ') : 'Bhubaneswar'}: 28°C, Partly Cloudy ☁️`,
  clear: () => null
};

export default commands;
