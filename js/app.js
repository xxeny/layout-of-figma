window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn-process').forEach(el => {
        el.addEventListener('click', (event)=> {
            el.querySelector('.palka').classList.toggle('palka-active')
            let itemProcess = el.parentNode.parentNode
            itemProcess.classList.toggle('item-process-active')
            console.log(itemProcess.querySelector('.description-process'))
            itemProcess.querySelector('.description-process').classList.toggle('description-process-active')
        })
    });
    
})