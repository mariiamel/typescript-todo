# Typescript Fun
## Getting started
Inside your terminal `npm i -g typscript` to globally install TypeScript on your machine.

## Introduction
Before we dive into TypeScript it's important that we take a step back and review what we've learned so far, specifically relating to JavaScript. With that in mind, I'd like to start with a question that some of you may be asked at interview. What is JavaScript?

-    High-level (easy enough to understand for the average user)
-    Dynamic (changes frequently over time)
-    Prototype-based ("classless"; instances of objects inherit properties from their parents)
-    Multi-paradigm (OOP; Functional etc.)
-    Weakly typed (What does this mean?)

If we think of the larger coding landscape, specifically outside of JS, we can see that many languages do not adhere to this weakly typed idea. Perhaps the most common example of a typed language is Java, in which once a variable has been designated a type, it cannot change. For example:

```
var a = 3;
a = 4; // Good

var b = 3;
b = "three" || "3" // Bad
```

Thinking back to your own experience in development, what benefit, if any, can you think this typing might provide?

<details>
    <summary>Answer</summary>
    <ul>
        <li>Bug spotting: catch bugs at compile time</li>
        <li>Predictability: if we define something as a string it will always be a string</li>
        <li>Readability: we can see the design intent of the code's developers</li>
    </ul>
</details>
<br />

With these benefits in mind, TypeScript was launched by Microsoft in 2012. It can be used on both client- and server-side code and in conjunction with a majority of existing JS libraries. So, given that we're essentially adding an additional layer onto an already complex language, the question you no-doubt are asking is "what is TypeScript and why should I care about it?"

At a high level, TypeScript is a superset of JS, meaning (essentially) that it's JS with additional features; or JS with a specific code design pattern additionally included.

Since its release, TypeScript has gained rapidly in popularity (as seen in the state of JS survey year on year) and is integral to a number of JS frameworks, most notably Angular.

In addition to having libraries and frameworks written with TypeScript specifically in mind, we can use TypeScript in development of existing ones such as React and Vue, as well as basic HTML applications, meaning if you prefer the benefits and design structure of a TypeScript application to one written in vanilla JS, you can receive these benefits when writing any JS code.

You can view the TypeScript docs [here](https://www.typescriptlang.org/).

## Example
In your terminal, make a directory called `typescript-sandbox` and `npm init -y`. We're going to play around with some of the basics before moving into a full codealong.

Once, you've done this, `touch index.ts` and we can begin having some fun.

Inside your `index.ts`, include the following code.

```
let userName: string;
let userId: number;
let userIsAdmin: boolean;
```

Next, inside your terminal, type `tsc index.ts`. This is how we transcompile TypeScript files into JS ones which can be read by our browser. What happened?

Let's assign some values to our variables.

```
userName = "Sarah";
userId = 12345;
userIsAdmin = "true";
```

Run `tsc index.ts` again and let's see what happens.

It doesn't work. During the transcompilation, TypeScript catches our error; i.e. we set `userIsAdmin` to be a boolean and, as we all know, `"true"` is not the same as `true`.

This is pretty powerful and allows us to catch common bugs pretty easily, but we can do even better. If you haven't already, change your variable `userIsAdmin = true` and include the following function below.

```
function checkUserStatus(name: string, id: number, isAdmin: boolean) {
    console.log(`name: ${name}; id: ${id}, isAdmin: ${isAdmin}`)
}

checkUserStatus(userName, userIsAdmin, userId);
```

Again, run `tsc index.ts` and let's see what happens. Including arguments out of order in function calls is a pretty common mistake in development, so it's pretty handy that we can catch it this early.

Correct your mistake with `checkUserStatus(userName, userId, userIsAdmin)` and run `tsc index.ts`. If you check your `index.js` file you should see something similar to the block below.

```
var userName;
var userId;
var userIsAdmin;
userName = "Sarah";
userId = 12345;
userIsAdmin = true;
function checkUserStatus(name, id, isAdmin) {
    console.log("name: " + name + ", id: " + id + ", isAdmin: " + isAdmin);
}
;
checkUserStatus(userName, userId, userIsAdmin);
```

Neat, tidy and correct code. All thanks to TypeScript!!! While this is great, it's hardly a real world application of the power TypeScript can give you in development.

Let's push on and see what we can do in a front-end library. Since we've been working with React so far, fork and clone [this repo](https://) and `npm i`.

We'll be making a nice, little todo list to show how TypeScript can work in tandem with React.

## TypeScript in React

Once you have everything installed locally open up your file in your IDE and have a look at it. What's different to a normal React app?

We have an additional file called `tsconfig.json` which contains all of our necessary TypeScript configurations; and inside our `package.json` we also have `moment`, an npm package that allows us to format time and date in a useable way, but more on that later.

*note! If you're seeing a ton of linting errors your IDE may be using an outdated version of TypeScript. Follow the commands below inside your IDE to fix this issue*

```
CMD + SHIFT + P

TypeScript: select TypeScript Version

Use Workspace version
```
### Updating our files and file structure

Let's look at our `App.tsx`. Inside we can see that four components are named in comments. Looking at our file structure, we can probably determine that `Header` and `Footer` should, most likely, be added to our `Layout` folder, while List and Modal should be added to `Componnents`. Let's add these files to each of those folders.

### Creating Layout Content

Creating a header and footer is an easy way to begin implementing design into a site, as once they're set, they generally don't need too much work done to them. It makes a lot of sense to get these set up just now.

Let's create `Header.tsx`, `Footer.tsx` and an `index.ts` to export them from. Why might we want to do this?

Inside your `Header.tsx` include the following code:

```
export default function Header() {
    return (
        <div className="layout header">
            <p className="heading heading--one">
                TypeScript Todo
            </p>
        </div>
    )
};
```
and in your `Footer.tsx` include:

```
export default function Footer() {
    return (
        <div className="layout footer">
            <p className="heading heading--two">
                Made with &headers;, TypeScript and React
            </p>
            <p className="heading heading--two">
                I'm a dev, not a designer
            </p>
            <p className="heading heading--two">
                Gavin Callander 2021
            </p>
        </div>
    )
};
```
Now, all we have to do is export them then import them into our `App.tsx` and we can get them displayed. In `index.ts` (within layout), include:

```
import Footer from './Footer';
import Header from './Header';

export { Footer, Header };
```
and inside `App.tsx` include:
```
import { Footer, Header } from './layout';
```
Now you can uncomment each inside yur return statement and view them in your browser!

### Implement the List component

Let's move onto the first of our components, `List.tsx`, and think about what the component will be doing. The primary job of list will be to display data passed down to it from `App.tsx`. When we talk about a list, we generally don't just mean one todo item, which means we should think about modularizing our code. What does this mean?

#### Instantiate state to pass down
When we use the `useState` hook in React, TypeScript does a cool thing. It makes an assumption based on the initial value which makes sense! After all, we're supposed to treat state as though it were immutable in React, right? The problem lies with objects and arrays, however, and React offers us a way to do this.

One way in which we can do this is by using an interface. Interfaces allows us to "subtype" our data and are a powerful way of defining contracts both within our code and with external code. What do you think this means?

```
export interface ToDo {
    name: string,
    dueDate: number,
    complete: boolean
}
```

With this done, we can apply this interface to state.

```
const [toDos, setToDos] = useState<ToDo[]>([]);
```

With this complete, we can assign values to state which can then be passed down the component tree. While we haven't added any data yet, we do have some mockData in our data directory, which we can import into `App.tsx` and use to help us build out our `List.tsx`.

Inside `App.tsx`, write the following code alongside your imports at the top of your file.

```
import { mockData } from './data/mockData';

const [toDos, setToDos] = useState<ToDo[]>(mockData);
```

We'll set this to empty later.

#### Create a List and ListItem skeletons

Let's build out the first part of our `List.tsx` and `ListItem.tsx` skeletons.

```
export default function List(props) {
    return (
        <div className="list">
            <div className="list__header"></div>
            <div className="list__body"></div>
        </div>
    )
};
```

```
export default function ListItem(props) {
    return (
        <span className="list__item">
            
        </span>
    )
}
```
#### Create interfaces for Props
What are we missing from a TypeScript React app in each?

```
import ListItem from './ListItem';
import { ToDo } from '../App';

interface ListProps {
    toDos: ToDo[]
}

export default function List(props: ListProps) {
    ...
}
```
```
import { ToDo } from '../App';

interface ListItemProps {
    toDo: ToDo
}

export default function ListItem(props: ListItemProps) {
    ...
}
```
There's one last thing that needs to change in order for us to be passing data and that's at `App.tsx`.

```
    <List toDos={toDos} />
```
#### Display mock data
Your linter should have stopped screaming at you now, meaning that all data types match and are being received in the components in which they are declared. Now, all we need to do in order to render our mock data is to map over it in our `List.tsx` and display a `ListItem.tsx` component for each individual object.

```
<!-- We display our mock data -->
<!-- Create our ListItem component so it shows passed in data -->

import moment from 'moment';

export default function ListItem(props: ListItemProps) {
    
    let currentDate = new Date().toString();
    let displayDate = moment(currentDate).format('YYYY-MM-DD')
    
    return (
        <span className="list__item">
            <p className="content content--one list__text">
                {displayDate}
            </p>
            <p className="content content--one list__test"</p>
                {props.toDo.name}
            </p>
        </span>
    )
};
```
```
<!-- Import and map data into ListItem components -->
import ListItem from './ListItem';
...
let listItems = props.toDos.map((toDo, i) => {
    return <ListItem toDo={toDo} />
})
...
<div className="list__body">
    { listItems }
</div>
```

We should now be showing some `ListItems` in `List`. With that being the case, we can move on to our `Modal.tsx` component.

### Implement the Modal
The purpose of our modal is going to be to update state and create a new todo item. So, we'll not only need to handle displaying the modal, but ensure that when it's active we can update state in our `App.tsx` file.

Inside `Modal.tsx` we should create the base of our modal. 

```
<!-- We create our base component -->
export default function Modal(props) {
    return (
      <div className="modal modal--active">
      </div>
    )
}l
```
Now, inside our return statement we can include the following:
```
<!-- We create our base form -->
<div className="modal modal--active">
    <form className="modal__form">
        <p className="heading heading--two">
            Add to list
        </p>
        <span className="modal__form modal__form__field">
            <p classname="content content--two">
                Item name:
            </p>
            <input 
                className="content content--two"
                type="text"
            />
        </span>
        <span className="modal__form modal__form__field">
            <p className="content content--two">
                Due date:
            </p>
            <input
                className="content content--two"
                type="date"
            />
        </span>
        <span className="modal__form modal__form__field modal__form__field--submit">
            <input
                className="content content--two modal__form__button"
                type="submit"
                value="add"
            />
        </span>
    </form>
</div>
```



At this point we can make a few assumptions about what we're going to need:
-    We'll need to create state as a means of handling our values
-    We'll need to create a function to change state at the app level
-    We'll need to handle our modal open/close state

#### Create state and handle changes
Inside `Modal.tsx`, include the following code to the corresponding location.

```
<!-- we create state and enable change -->
const [name, setName] = useState('');
const [dueDate, setDueDate] = useState(0);
const [complete, setComplete] = useState(false);
...
<input 
    className="content content--two"
    onChange={e => setName(e.target.value)}
    type="text"  
/>
...
<input
    className="content content--two"
    onChange={e => setDueDate(Date.parse(e.target.value))}
    type="date"
/>
```

Now when we change the form fields in our browser, we'll update state!

#### Change state at the App level
This part involves slightly more work. After all, we aren't passing any props down to `Modal.tsx` yet and need to create an interface for any props we send down.

In `App.tsx` we can do this. We can also write a function that will allow us to add a new item to toDo in state and pass it to `Modal.tsx` to use later.

```
<!-- we write our function and pass it to Modal -->
const addNewToDo = (newToDo: ToDo) => {
    setToDos(toDos => [...toDos, newTodo]);
};
...
<Modal addNewToDo={addNewToDo} />
```
With this function passed down, we can now add any new item created in the modal component to state. We just need to write a handler function for our submit in `Modal.tsx` and use `addNewToDo` inside of it. We also need to ensure we have an interface to the props being passed down.

```
import { ToDo } from '../App';

interface ModalProps {
    <!-- void is used as we aren't returning an actual value inside the function -->
    addNewToDo: (newToDo: ToDo) => void
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newToDo = {name, dueDate, complete};
    if (name && dueDate) {
        props.addNewToDo(newToDo);
    };
};
```

We can then set this to the form's onSubmit method.

```
<form className="modal__form" onSubmit={e => handleSubmit(e)}>
...
</form>
```
Now, when information is added to the form and submit is clicked, the data is pushed to state as a new `toDo`.

#### Handle the modal opening and closing
Creating a modal in react is actually a fairly easy task, as we can conditionally render content using updates in state.

```
const [modalOpen, setModalOpen] = useState(false);
...
const toggleModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
};
...
let modalClassname = modalOpen ? "modal modal--active" : "modal";
...
<List 
    toTods={toDos}
    toggleModal={toggleModal}
/>
<Modal 
    classname={modalClassname}
    addNewToDo={addNewToDo}
    toggleModal={toggleModal}
/>
```

Whenever this function is invoked, the boolean state `modalOpen` will invert, displaying or disabling the modal as `modalClassname` changes. This just involves a slight change to `Modal.tsx` and `List.tsx`.

```
interface ModalProps {
    addNewToDo: (newToDo: ToDo) => void,
    toggleModal: () => void
}
...
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {    
    ...
    props.toggleModal();
}
...
<div className={props.className}>
    ...
</div>
```

```
interface ListProps {
    toDos: ToDo[],
    toggleModal: () => void
}
...
<p className="heading heading--two list__header__add" onClick={props.toggleModal} />
```

## Mark an item as complete
What always annoys me about normal ToDo lists is that they just delete an item once it's complete. This doesn't make sense to me, since I like the ego boost a completed todo list can bring. So, why not mark it as complete instead?

Inside `ListItem.tsx` add the following code:

```
interface ListItemProps {
    index: number,
    toDo: ToDo,
    updateToDos: (toDoIndex: number) => void
}
...
<input 
    className="heading heading--one" 
    type="checkbox" 
    defaultChecked={props.toDo.complete} 
    onClick={() => props.updateToDos(props.index)}
/>
```
What is `updateToDo`? It's a new function that needs to be written in `App.tsx`. 

```
const updateTodos = (toDoIndex: number) => {
    let tempTodos = [...ToDos];
    tempToDos[toDoIndex].complete = !tempToDos[toDoIndex].complete
    setToDos(newToDos);
}
...
<List 
    toDos={toDos}
    updateToDos={updateToDos}
/>
```
It is passed down throughout the component tree. First to `List.tsx` as above and then to `ListItem.tsx`.
```
return <ListItem 
            key={i} 
            index={i} 
            toDo={toDo} 
            updatetoDo={updateToDo} 
        />
```
Now, a user is able to check the checkbox next to a given list item to mark it as complete and update state and your todo list is complete!

## Conclusion
While this is only a basic starter app, hopefully it has given you a starting point when it comes to understanding how React and TypeScript can work together.

There are a ton of additional resources, including multiple tutorials on the official [TypeScript site](https://www.typescriptlang.org/). Check them out if you want an additional challenge.