import React from 'react'

function app() {
  return (
    <div>
      <h1>Modal</h1>
      <div>
      <button class="primary" onclick="window.dialog.showModal();">Open Dialog</button>

<dialog id="dialog">
	<h2>Hello.</h2>
	<p>A CSS-only modal based on the <a href="https://developer.mozilla.org/es/docs/Web/CSS/::backdrop" target="_blank">::backdrop</a> pseudo-class. Hope you find it helpful.</p>
	<p>You can also change the styles of the <code>::backdrop</code> from the CSS.</p>
	<button onclick="window.dialog.close();" aria-label="close" class="x">❌</button>
</dialog>c
      </div>
    </div>
  )
}

export default app