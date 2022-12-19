# HTML form
Replace `<your_account>` with your Github username and copy the links to Pull Request description:
- [DEMO LINK](https://<your_account>.github.io/layout_html-form/)
- [TEST REPORT LINK](https://<your_account>.github.io/layout_html-form/report/html_report/)

> Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/#how-to-solve-the-layout-tasks-on-github)
___

## ❗️❗️❗️ Check your code with the [CHECKLIST](https://github.com/mate-academy/layout_html-form/blob/master/checklist.md) before ❗️❗️❗️

## The task:
Create HTML page with form. On form submit send form data to `https://mate-academy-form-lesson.herokuapp.com/create-application`

![screenshot](./references/form-example.png)

## Notes
- Every field should have name attribute
- Every field should have label, which focuses input on label click
- Do not use tabs for indentation. Instead use 2 spaces
- Most of the time you want each tag in new line
- Form should have different inputs with such types:
  - [ x] text
  - [ x] number
  - [ x] email
  - [ x] checkbox
  - [ x] radio
  - [ x] password
  - [ x] range
  - [ x] time
  - [ x] color
  - [ x] date
- Form should have textarea and select elements.
- You should use each of this attribute at least once
  - [ x] required
  - [ X] min
  - [ x] max
  - [x ] minlength
  - [x ] maxlength
  - [ x] multiple
X Age should be at least `1` and at max `100` with a default value of `12`
X The email field should have placeholder value: `email@example.com`.
X Text fields should have `autocomplete="off"`.
X `Submit` button should have a `type="submit"` 
X Vertical distance between inputs should be `10px`
X Vertical distance between groups should be `20px`
x Any other styles should be browser default

--> Don't forget to proofread your code using [CHECKLIST](https://github.com/mate-academy/layout_html-form/blob/master/checklist.md)

## Tips & Hints
1. You can group fields with [fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) tag
2. The form should have correct `method` and `action`
3. Follow the [code style guide](https://mate-academy.github.io/style-guides/htmlcss.html)
