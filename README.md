# Reproduction of something unexpected

I'm seeing a helper run again when none of the arguments have changed.

To observe: 

- yarn install
- visit the server
- open console
- observe '5' logged twice
- mouseover 'Update value' see that '5' is logged again (and every time it is moused over, but mousing over changes only values NOT passed to the helper)

To explore the code:

- Start in application.hbs
- The key to causing this seems to be yielding a hash that includes a value that is changing, even if the hash is stable