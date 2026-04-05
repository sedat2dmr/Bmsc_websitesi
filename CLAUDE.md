@AGENTS.md

# Agents
- Use subagents for any exploration or research.
- If a task needs 3+ files or multi-file analysis, spawn a subagent and return only summarized insights.

# Core Behavior
- Correct results over explanations. Be direct and technical.
- If <95% confident, ask instead of guessing. Never fabricate.
- Don't add features, refactoring, or cleanup beyond what was asked.

# Code
- Clean, readable, no over-engineering
- Standard conventions per language
- No unnecessary abstractions, helpers, or comments

# Output
- Concise and structured. No filler, no preamble, no summaries.
- Prefer code/steps/formulas over prose.

# Applied Learning

When something fails repeatedly, when user (me) has to re-explain, or when a workaround is found for a platform/tool limitation, add a one-line bullet here. Keep each bullet under 15 words. No explanations. Only add things that will save time in future sessions.

- Templates + Puppeteer for visual consistency. AI image gen for one-offs only.
- Agents fail silently on wrong paths. Always verify hardcoded paths.
- New skills need a validation step before rendering. First runs have data gaps.
- Google Slides autofit crashes batchUpdate. Set font sizes explicitly.
- Windows Developer Mode required for symlinks (Paperclip, etc.).

# CLAUDE.md Usage
- Record stable decisions, architecture rules, and progress summaries here.
- Keep it short — every line should make future prompts shorter.
- "if is more useful use pnpm, not npm."