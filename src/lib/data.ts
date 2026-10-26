export const profile = {
  name: "Mridul Gupta",
  title: "AI Engineer",
  bio: "I build LLM-powered products end-to-end — from data pipelines and evaluation harnesses to the last pixel of the UI.",
  email: "mridulguptayt@gmail.com",
  socials: {
    github: "https://github.com/mridulgupta",
    linkedin: "https://linkedin.com/in/mridulgupta",
    x: "https://x.com/mridulgupta",
    youtube: "https://youtube.com/@mridulgupta",
  },
};

export const greeting = "Hey, I'm Mridul 👋";

// General fallback pool — keyword-unaware answers
export const chatReplies = [
  "Good one! Short version: I'm a demo, but I ship real things — pipelines, evals, and pixel-perfect UIs.",
  "I'd start by defining the eval, then building the pipeline, then the interface. That order saves weeks.",
  "Ha — noted. For real work, reach out via the Contact card below 👇",
  "I build LLM-powered products end to end. Ask me about RAG, fine-tuning, or eval harnesses!",
  "Fair question. Honestly? I'd spike it in a weekend, measure it, and only then scale it.",
  "That one's beyond this demo's scope — but it's exactly the kind of thing I like building. Hit me up on Contact.",
  "I keep a jar of 'why did I write this' comments. Half of them are still there, sadly.",
  "The best LLM feature is usually the boring one: good retrieval, honest failure states, sane cost.",
  "If it's not in my eval harness, it doesn't ship. That rule has saved me at least twice.",
  "Ask me anything else about RAG, agents, fine-tuning, or data — I'll answer the demo way.",
];

// Keyword-aware topics — first topic with a matching keyword wins
export type ChatTopic = { match: string[]; lines: string[] };

export const chatTopics: ChatTopic[] = [
  {
    match: ["hi", "hey", "hello", "yo "],
    lines: [
      "Hey! 👋 Ask me about RAG, fine-tuning, or what I'm working on — I answer the demo way.",
      "Hey there. One question, one very confident but slightly canned answer — that's the deal.",
    ],
  },
  {
    match: ["rag", "retrieval", "search", "searches", "vector"],
    lines: [
      "RAG is my favourite problem: hybrid retrieval (dense + BM25), a re-ranker, and per-citation traces. The magic is mostly in the boring parts — chunking, metadata, and evals.",
      "For RAG: don't skip BM25. 'Dense only' feels smarter until you search for a part number and get poetry back. I learned that with 40 enterprise customers.",
      "Retrieval quality beats model size, 9 times out of 10. Fix the index before you upgrade the model.",
    ],
  },
  {
    match: ["fine-tun", "finetun", "lora", "fine tun", "train"],
    lines: [
      "Fine-tuning: LoRA almost always, full fine-tunes rarely. My kit scrubs the dataset, sweeps hyperparameters, and gates every merge behind an eval. No eval, no merge.",
      "If your prompt fits in a page, don't fine-tune. Fine-tuning is for when you need a behaviour, not an answer.",
      "I once fine-tuned a 7B model overnight while hiking. Personal best. The model's worse than the evals say it is.",
    ],
  },
  {
    match: ["llm", "llms", "model", "models", "gpt", "transformer", "agent"],
    lines: [
      "My rule for LLM products: define the eval first, build second. If you can't measure it, you can't ship it.",
      "Agents are just loops with budgets. The hard part is the failure state — what does 'I can't do that' look like in the UI?",
      "The best model is the cheapest one that passes your eval. Most teams over-pay for model size on retrieval problems.",
    ],
  },
  {
    match: ["eval", "metric", "benchmark", "accuracy"],
    lines: [
      "Evals are the product, honestly. I build a harness for every model change: win-rate, latency, cost, per-prompt diffs. It's a CI quality gate now.",
      "Small eval, run always. Big eval, run nightly. A giant eval you never run is just a pile of confidence.",
      "I track hallucinated-answer rate separately from helpfulness. They move in opposite directions and pretending otherwise is how incidents start.",
    ],
  },
  {
    match: ["data", "pipeline", "etl", "kafka", "postgres", "database"],
    lines: [
      "Data work is where my day actually starts: Kafka in, Postgres out, exactly-once semantics, and a dead-letter queue that gets checked before coffee.",
      "My best pipeline moves 2B+ events a day and is aggressively boring. Boring is the win.",
      "Pipeline rule: if a job can't be re-run without side effects, it's a bug waiting for a Friday.",
    ],
  },
  {
    match: ["project", "work", "built", "portfolio", "code"],
    lines: [
      "My favourite project is the RAG search across messy docs — it's the one that ties together everything I do. Check the Projects page for the rest.",
      "The flagship is a hybrid-retrieval RAG system, but my favourite is the eval dashboard — nobody takes pleasure in regression bars, so I made the bars pretty.",
      "I build end to end: data pipeline, model layer, API, UI. The last pixel gets the same care as the first query.",
    ],
  },
  {
    match: ["contact", "email", "hire", "reach", "work with", "job"],
    lines: [
      "The Contact page has my email (mridulguptayt@gmail.com) and a form that's just as much a demo as I am. 😄",
      "Best route: the Contact card below — or grab me on GitHub. I answer faster than this demo.",
      "If you have a project or a weird model idea, say hi. 'Weird' usually means 'interesting'.",
    ],
  },
  {
    match: ["fun", "hobby", "chess", "music", "game", "hike", "retro"],
    lines: [
      "Chess, lo-fi, hiking, and retro games — the Fun page has the full list, plus a mood card that re-rolls every visit.",
      "Currently: blitz chess, a jar of code comments, and an SNES I keep 'fixing'. Ask the Fun page for details.",
      "Hiking is where half my ideas start. The other half start at 3am and never survive review.",
    ],
  },
  {
    match: ["career", "path", "future", "plan", "next"],
    lines: [
      "Next: agent evaluation at scale — making 'this agent got worse' a number you can pin to a commit.",
      "Long game: LLM systems that explain themselves. Explainability first, always.",
      "In 5 years? Still probably shipping boring, reliable ML that feels effortless to use. That's the dream.",
    ],
  },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  highlight: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    period: "2025 — Now",
    role: "AI Engineer",
    company: "Toukoun Labs",
    highlight:
      "Building LLM-powered products end-to-end — retrieval, agent pipelines, and the eval harness that keeps them honest.",
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "ML Engineer",
    company: "Datawise Labs",
    highlight:
      "Shipped a RAG search system over messy enterprise docs — hybrid retrieval plus per-citation tracing, live for 40+ customers.",
  },
  {
    period: "2023 — 2024",
    role: "Data Engineer",
    company: "Nimbus Analytics",
    highlight:
      "Built streaming pipelines moving 2B+ events a day from Kafka into Postgres and Redshift with exactly-once semantics.",
  },
  {
    period: "2022 — 2023",
    role: "Research Assistant",
    company: "UniLab AI",
    highlight:
      "Fine-tuned transformer models (LoRA) for low-resource language summarization; published two internal evals.",
  },
];

export const values = [
  {
    title: "Explainability first",
    body: "If I can't explain why the model did something, it doesn't ship. Evals and traces are part of the product.",
  },
  {
    title: "Ship, then iterate",
    body: "A working v1 beats a perfect v3. Small releases, fast feedback, boring reliability.",
  },
  {
    title: "Human-centered AI",
    body: "Interfaces should feel calm and predictable. The model is the hardest part — don't let it show in the UI.",
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  category: "LLM" | "Data" | "Web" | "Tools";
  tags: string[];
  live: string;
  repo: string;
  gradient: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "rag-docs",
    title: "RAG search across messy docs",
    description:
      "Hybrid retrieval (dense + BM25) with re-ranking and per-citation traces. Cuts hallucinated answers by 71% on our internal eval set.",
    category: "LLM",
    tags: ["RAG", "PyTorch", "FastAPI", "Postgres"],
    live: "https://toukoun.dev/demos/rag-docs",
    repo: "https://github.com/mridulgupta/rag-docs",
    gradient: "from-sky-100 via-indigo-100 to-purple-100",
    featured: true,
  },
  {
    id: "voice-clone",
    title: "Voice clone pipeline",
    description:
      "Turn a 30-second voice sample into a neural clone. Whisper transcription, voice conditioning, and a streaming TTS endpoint in under 90s.",
    category: "LLM",
    tags: ["Speech", "TTS", "Python", "Docker"],
    live: "https://toukoun.dev/demos/voice",
    repo: "https://github.com/mridulgupta/voice-clone",
    gradient: "from-pink-100 via-rose-100 to-amber-100",
  },
  {
    id: "eval-dashboard",
    title: "LLM eval dashboard",
    description:
      "Track regression across model versions: win-rate, latency, cost, and per-prompt diffs. Plugged into CI as a quality gate.",
    category: "Tools",
    tags: ["TypeScript", "Next.js", "Postgres"],
    live: "https://toukoun.dev/demos/evals",
    repo: "https://github.com/mridulgupta/eval-dashboard",
    gradient: "from-emerald-100 via-teal-100 to-cyan-100",
  },
  {
    id: "events-etl",
    title: "Billion-event ETL",
    description:
      "Kafka-based ingestion that reshapes 2B+ daily events into analytical Postgres with exactly-once semantics and dead-lettering.",
    category: "Data",
    tags: ["Kafka", "Python", "Postgres", "AWS"],
    live: "https://toukoun.dev/demos/etl",
    repo: "https://github.com/mridulgupta/events-etl",
    gradient: "from-amber-100 via-orange-100 to-red-100",
  },
  {
    id: "prompt-studio",
    title: "Prompt Studio",
    description:
      "Drag-and-drop prompt playground with versioning, A/B slots, and one-click deploy to our API. Internal tool, 300+ users.",
    category: "Web",
    tags: ["Next.js", "React", "Tailwind"],
    live: "https://toukoun.dev/studio",
    repo: "https://github.com/mridulgupta/prompt-studio",
    gradient: "from-violet-100 via-fuchsia-100 to-pink-100",
  },
  {
    id: "fine-tune-kit",
    title: "Fine-tune Kit",
    description:
      "Lora fine-tuning kit with dataset scrubbing, auto hyperparameter sweeps, and a single-command eval gate before merge.",
    category: "LLM",
    tags: ["PyTorch", "Lora", "Python"],
    live: "https://toukoun.dev/demos/finetune",
    repo: "https://github.com/mridulgupta/fine-tune-kit",
    gradient: "from-blue-100 via-sky-100 to-cyan-100",
  },
];

export type SkillGroup = {
  domain: string;
  blurb: string;
  bars: { label: string; value: number }[];
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    domain: "AI / ML",
    blurb: "Models, data, and the evals that keep them honest.",
    bars: [
      { label: "PyTorch", value: 92 },
      { label: "LLM apps (RAG, agents)", value: 95 },
      { label: "Fine-tuning (LoRA)", value: 84 },
      { label: "Evaluation & RAG", value: 88 },
      { label: "Data pipelines", value: 80 },
    ],
    tags: ["Transformers", "RAG", "Embeddings", "Prompt engineering", "LangSmith", "OpenAI", "Hugging Face"],
  },
  {
    domain: "Backend",
    blurb: "Fast, boring, observable services.",
    bars: [
      { label: "Python", value: 94 },
      { label: "TypeScript / Node", value: 88 },
      { label: "FastAPI", value: 90 },
      { label: "Postgres", value: 86 },
      { label: "Redis & queues", value: 78 },
    ],
    tags: ["REST", "WebSockets", "gRPC", "Kafka", "Observability"],
  },
  {
    domain: "Frontend",
    blurb: "Calm interfaces for hard systems.",
    bars: [
      { label: "Next.js / React", value: 93 },
      { label: "Tailwind CSS", value: 95 },
      { label: "TypeScript", value: 90 },
      { label: "Motion / UX", value: 82 },
    ],
    tags: ["App Router", "Framer Motion", "Canvas/WebGL", "a11y"],
  },
  {
    domain: "Tools",
    blurb: "The glue that keeps things shipped.",
    bars: [
      { label: "Docker", value: 88 },
      { label: "AWS", value: 82 },
      { label: "Git & CI/CD", value: 92 },
      { label: "Linux", value: 85 },
    ],
    tags: ["GitHub Actions", "Terraform", "Linux", "S3", "EC2/ECS"],
  },
];

export const marqueeTech = [
  "Python",
  "TypeScript",
  "PyTorch",
  "Next.js",
  "FastAPI",
  "Postgres",
  "Redis",
  "Docker",
  "AWS",
  "Kafka",
  "LangSmith",
  "Hugging Face",
  "Git",
  "Tailwind",
];

export const moods = [
  { emoji: "🤖", line: "Half robot today, fully caffeinated." },
  { emoji: "🧠", line: "Running background jobs: one is a 3am idea." },
  { emoji: "☕", line: "Powered by coffee and eval curves." },
  { emoji: "🌊", line: "In flow mode — the diff is green." },
  { emoji: "🎧", line: "Lo-fi while I fine-tune. Classic pairing." },
  { emoji: "♟️", line: "Chess brain vs LLM brain, both busy." },
];

export const hobbies = [
  { emoji: "♟️", title: "Chess", line: "Blitz ladder, occasional 1900, zero mercy for my engine." },
  { emoji: "🎧", title: "Lo-fi & jazz", line: "Deep-work soundtrack, mostly 70s records on shuffle." },
  { emoji: "🥾", title: "Hiking", line: "Weekend summit hikes — think tanks go best on the trail." },
  { emoji: "🕹️", title: "Retro games", line: "SNES speedruns and emulator modding on a borrowed CRT." },
];

export const funFacts = [
  "Named a production load balancer \"Gerald\". Gerald is still up.",
  "Once shipped a model whose output was entirely haiku. The team still uses it for stand-ups.",
  "Holds a personal best: fine-tuned a 7B model overnight while hiking.",
  "Believes in 90-minute work blocks. The 91st minute is sacred.",
  "Keeps a jar of \"why did I write this\" code comments from old projects. It's 40% full.",
];

export const contactToast = "Message noted — I'll get back to you soon";
