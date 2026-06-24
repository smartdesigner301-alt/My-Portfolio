const { execSync } = require('child_process');
try {
  console.log("Running git status...");
  const output = execSync('git status', { cwd: '..' }).toString();
  console.log(output);
} catch (err) {
  console.error("Error executing git command:", err.message);
  if (err.stdout) console.error("Stdout:", err.stdout.toString());
  if (err.stderr) console.error("Stderr:", err.stderr.toString());
}
