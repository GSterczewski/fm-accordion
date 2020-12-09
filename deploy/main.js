

class ListItem{
    constructor(ref){
        this.ref = ref
        this.isExpanded = false
        this.className = "faq--toggled"
    }
    expand(){
        if(this.isExpanded){
            this.ref.classList.remove(this.className)
            this.ref.open = false
            this.isExpanded = false
        } else{
            this.isExpanded = true
            this.ref.open = true
            this.ref.classList.add(this.className)
        }
        
    }
    fold(){
        this.ref.classList.remove(this.className)
        this.ref.removeAttribute("open")
        this.isExpanded = false
    }
    
}

class List{
    constructor(className){
        this.items = Array.from(document.getElementsByClassName(className)).map(item => new ListItem(item)) 
    }
    toggle(event){
        event.preventDefault()
        this.items.forEach(item =>{
            if(item.ref === event.currentTarget){
                item.expand()
            } else{
                item.fold()
            }
        })
    }
    hook(){
        this.items.forEach(item =>{
            item.ref.addEventListener("click", this.toggle.bind(this))
        })
    }
}


window.onload = () => {
    new List("faq").hook()
}