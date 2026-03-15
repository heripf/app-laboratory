import { LitElement, html, css } from "lit";

//implementacioń del WCom
class DwMessage extends LitElement{
    //css del componente
    static styles = css`
        //estilo a todo el componente
        :host{
            //display inlien por default
            display: block;
            border: 1px solid red;
            padding: 10px;
            }
        div{
            background-color: #5cdef2;
        }
        `
    //guarda el estado de los componentes
    static properties = {
        message: {type: String},
        version: {},
    };

    constructor() {
        super();
        this.version = 'STARTING';
        this.message = 'mensaje vacio';

    }

    //vista del componente, define el DOM interno del componente
    render() { //regresa un string literal, procesa un template literal y regresa un template result
        return html`
            <div><p>${this.message}</p></div>
            <input @input=${this.handleMessage} placeholder="Enter the message...">            
            <button @click=${this.handleClick}>Click me!</button>
        `;
    }

    //manejador de eventos
    handleMessage(event){
        console.log("click...");
        const input = event.target; 

        this.message = input.value;
    }
}
customElements.define('dw-message', DwMessage); //registra en el browser
