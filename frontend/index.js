import Store from 'store';


var hasChecked = false;
if (Store && Store.getState()) {
    Store.subscribe(()=> {
        if (!hasChecked) {
            if (Store.getState().auth) {
                if (Store.getState().auth._role === 'learner') {
                    var element = document.getElementById("wrapper");
                    element.classList.add("chrome-is-learner");   
                }
                hasChecked = true;
            }
        }
    })
    
}
