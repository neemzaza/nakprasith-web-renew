Welcome to guide "how to configure"
===================================
This Web Page was created by np78 "Sarut Ardnarong"

[Components Editable File]
> in `components/data` you just found:

### current-event.json ###

current-event.json is for you happening activity in school in file with array and object inside

[
    {
        "imgsrc": "(YOUR IMG SRC)",
        "alt": "(NAME OF THIS ACTIVITY)"
    },
    ...
]

way to add another event is copy first object then paste like this

[
    {
        "imgsrc": "(YOUR IMG SRC)",
        "alt": "(NAME OF THIS ACTIVITY)"
    },
    {
        "imgsrc": "(YOUR IMG SRC 2)",
        "alt": "(NAME OF THIS ACTIVITY 2)"
    },
]

### info.json ###

{
    "school-eng-name-1": "Name 1 (Appear in first line on navbar)",
    "school-eng-name-2": "Name 2 (Appear in second line on navbar)"
}

### navigation.json ###
[
    {
        "code": "your defind code",
        "name": "this is label", 
        "bootstrap-icon": "bi-xxx-xxx", (name of bootstrap icons visit on `https://icons.getbootstrap.com/`)
        "link-to": "/", (Path of html file)
        "dropdown": [] (Dropdown configuration)
    },
    ...
]

- ## dropdown ##
    [
        {
            "code": "your defind code (page 1)",
            "name": "this is label",
            "link-to": "/xxx/xxx1"
        },

        {
            "code": "your defind code (page 2)",
            "name": "this is label",
            "link-to": "/xxx/xxx2"
        },

        {
            "code": "your defind code (page 3)",
            "name": "this is label",
            "link-to": "/xxx/xxx3"
        },
        ...
    ]

`YOU CAN SEE THE EXAMPLE TO EDIT IN .json FILES`