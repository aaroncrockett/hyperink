# Rules & Guidelines

## Util classes and global CSS defaults

- UI components have util functions as default props that are built off of skeleton UI util classes
- These are set in the global CSS file per project
- Consuming components util classes can override. Some util props contain more than one class. Consumers can pass back in some of the classes, to only override some classes.
- Attempt to keep these to 3 or 4, at most, per utilClass prop. Balance flexibity with complexity and clarity.
- Only use these in ui components to make the overrides scoped to the component.
- A consumers can use !import to override some of the defaults, as well. This is because there should be no additoinal global classes created, other than potentially some simple base/reset elements within global. So the !important should be limited to the scope of the component and shouldn't have many conflicts. If there are conflicts they should be from base element classes. If this is happening, considering moving these to the component util class.
- Keep global css element selector defaults limited. Also know that skeleton has some, and these can be overriden via their docs.

## Naming

- hyperink for classes is shortened to hI-
- when naming, spell out the entire word if there are: 3 or less words. The words are 8 or less chars.
- exmaple description can be shorted to desc becasue it is long.
- some words are shortend because they are so universally understood, such as "nav"

examples:
nav-wrapper-section (3 words, all short enough. but nav is universally understood)
input-wrapper-error (3 words, each less than 9 chars)
hI-input-wrap-align (hyperink shortening, more than 3 words)
