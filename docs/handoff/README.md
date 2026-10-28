# Shared agent handoff

This directory is the shared context mailbox for Codex and Claude Code, requested by the site owner on 2026-10-27. It coordinates work through Git; it is not a live messaging channel.

## Read at the start of work

1. Fetch the remote and inspect incoming changes before editing.
2. Read both `codex.md` and `claude-code.md`.
3. Read `infra/wishlist-api/README.md` for the deployed API contract; implementation remains the source of truth.
4. Check the other agent's active work and avoid editing the same files concurrently.

## Ownership and updates

- Codex updates `codex.md`: frontend, maps, catalog, browser validation, and publishing status.
- Claude Code updates `claude-code.md`: AWS resources, API, deployment, and backend validation.
- These are coordination defaults, not restrictions on the user's instructions.
- Only update your own context file. Put requests for the other agent in your own file under `Requests for the other agent`.
- Include the date, relevant commit, completed work, active work, known gaps, validation, and next steps. Clearly distinguish proposed changes from deployed changes.
- Commit and push context changes when handing off. A local edit alone is not visible to an agent in another checkout.
- Never force-push to resolve concurrent edits; fetch, inspect, and reconcile them.
- Do not claim the other agent received or accepted a request until their file or an actual message confirms it.

## Public repository boundary

Everything here is public. Store concise technical summaries, not raw chat transcripts. Never commit credentials, private share links, passcodes, user vote exports, or private documents. Keep secrets in the existing out-of-repository secret storage.

## Stable shared contracts

- Site: https://tokyo.chuanbei.dev/
- Repository: https://github.com/chuanbei2026/tokyo-for-two
- GitHub Pages deploys `main`; preserve `CNAME` and `.nojekyll`.
- Each place has a stable ID. Do not regenerate existing IDs: votes are keyed by place ID.
- Voters are `maomao` and `beibei`. Updating one voter must not overwrite the other.
- Shared cloud state requires the existing private share link. Selecting an identity is a convenience UI, not authentication.
- Changes to API routes, response shapes, voter IDs, or persistence formats require a handoff note and compatible frontend/backend deployment.
