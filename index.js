const core = require('@actions/core');
const github = require('@actions/github');


try {
  // 1. Get Input defined in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  
  console.log(`Hello, ${nameToGreet}!`);

  core.debug('Inside try block');
  core.warning('A warning message');

  // Creates a warning pointing to a specific file (Great for Linters!)
  core.warning('Deprecation Notice', {
    file: 'app.js',
    startLine: 10,
    title: 'Old API Detected'
  });

  core.error('test');

  // 2. Do some "work"
  const timestamp = new Date().toTimeString();
  
  // 3. Set Output defined in action.yml
  core.setOutput("time", timestamp);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  core.info(`The event payload: ${payload}`);

  core.notice('This is a message that will also emit an annotation')

  core.summary.addRaw('Some content here :speech_balloon:', true)

} catch (error) {
  // 4. Properly fail the action if something goes wrong
  core.setFailed(`Action failed with error: ${error.message}`);
}