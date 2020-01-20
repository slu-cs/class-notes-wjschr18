# class-notes

-----1/20/2020
ID's in html give specific identifiers to tags:
  <tag id="..."></tag>

Classes in html
  give group labels to tags - classes can be shared.
    <tag class="">

CSS selectors:
  *{
    universal -> all tags
  }

  tag{
    type selector -> all tags of this type
  }

  #id{
    id selector -> only selects tag on page with this id
  }

  .class{
    class selector -> selects all tags with this class
  }

  [attr=value]{
    attribute selector -> selects all tags with attr="value"
  }

  Descendant selectors:

    ancestor descendant {
      all tags matching descendant which are within tags matching ancestor
    }

  Multiple criteria selector:

    tag.class {
      all tags of a certain type with a certain class
    }

    tag[attr=value]{
      --
    }

  Condense multiple rule sets:

    A, B {
      all tags matching A selector and all tags matching B selector
    }

  flukeout.github.io
