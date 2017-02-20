Created as example for StackOverflow question:

* 

Live - https://tuchk4.github.io/onBlurExample

In this example - "render" is a time between parent component constructor and componentDidMount.
(Parent component - I mean buttons list wrapper)


open console at devtools

----

* Reload
* Click "FOCUS"

render ~0.07 (OK)

---

* Reload
* Click "BLUR"

render  ~0.07 (OK)

---

* Reload
* Click "BOTH"

**render ~0.3** (Strange)

Steps:
* Reload
* Click "BOTH"
* **(~0.3 sec)** (Strange)
* Click "Clear"
* Click "BOTH"
* (~0.06 sec) (OK)

---

Why initial render time for component with both onBlur and onFocus is much bigger than others?
