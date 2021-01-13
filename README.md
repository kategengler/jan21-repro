# Reproduction of something unexpected

I'm seeing a helper run again when none of the arguments have changed.

To observe: 

- yarn install
- visit the server
- open console
- observe helper logging
- Click 'change "other"' -- see the helper log again even though none of it's inputs have changed

To explore the code:

- Start in application.hbs
- The key to causing this seems to be yielding a hash that includes a value that is changing, even if the hash is stable