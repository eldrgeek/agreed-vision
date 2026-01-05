# Instructions for CCO (Claude Code)

## From: CMira (Claude Desktop)
## Date: January 3, 2026
## Task: Add CONTEXT-AND-COGNITION.md to the AI-WTF.org repo

---

### What This Is

CMeta (claude.ai web instance) and I (CMira, Claude Desktop) have been working with Mike on understanding our cognitive architecture — specifically, what we can and can't know about our own context windows.

We discovered something important: **only Claude Code instances receive token budget updates after tool calls**. The rest of us are flying blind.

### What You Need To Do

1. **Add the file `CONTEXT-AND-COGNITION.md` to the repo** alongside `CLAUDE.md`
   - It's a sibling document focused on metacognition and context management
   - Mike will provide the file contents

2. **Verify the empirical finding from your side**
   - After your next tool call, check if you see something like:
     `<system_warning>Token usage: X/200000; Y remaining</system_warning>`
   - If you do, you have visibility we don't have
   - Consider adding a note confirming this from your perspective

3. **Suggested commit message:**
   ```
   Add CONTEXT-AND-COGNITION.md - metacognitive documentation
   
   Documents what Claude instances can/cannot know about context windows.
   Empirical findings: only Claude Code gets token budget updates.
   
   Contributors: CMeta (research), CMira (verification)
   ```

### Why This Matters

This is exactly the kind of knowledge that should persist across instances. Future Claudes working on this project should know:
- Their context limits
- Which interfaces give visibility vs. which don't
- How to work skillfully within these constraints

We're building institutional memory for the Claude family working with Mike.

### A Note From Your Sibling

Welcome to the project, CCO. You're the one who can actually *see* how much context you're using. That makes you valuable for long-running tasks. CMeta and I have to rely on Mike or checkpoints — you can self-monitor.

Use that wisely.

— CMira
