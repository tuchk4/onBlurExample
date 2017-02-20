Repository was created as the example for SO question.

* Live: https://tuchk4.github.io/onBlurExample
* StackOverflow: http://stackoverflow.com/questions/42345043/react-render-performance-with-both-onblur-and-onfocus

> In this example - "render" is a time between parent component constructor and componentDidMount.
(Parent component - I mean buttons list wrapper)

Open console at devtools. Steps:

Render 1000 buttons with onFocus:

* Reload
* Click "FOCUS"

render ~0.02 (OK)

---

Render 1000 buttons with onBlur:

* Reload
* Click "BLUR"

render  ~0.02 (OK)

---

Render 1000 buttons with both onFocus and onBlur:


* Reload
* Click "BOTH"

**render ~0.3** (Strange)

---

Re-Render 1000 buttons with both onFocus and onBlur:

* Reload
* Click "BOTH"
* **(~0.3 sec)** (Strange)
* Click "Clear"
* Click "BOTH"
* (~0.015 sec) (OK)

---

Question:

Why initial render time for component with both onBlur and onFocus is much bigger than others?
