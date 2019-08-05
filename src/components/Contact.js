import React from 'react'

const Contact = (props) => {
    setTimeout(()=>{
        props.history.push('/about')
    }, 2000)
    return(
        <div className='container'>
            <h4 className='center'>Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit odio libero, et bibendum neque dapibus ac. Duis quis ante quis neque dapibus placerat. Donec ultrices vitae tellus a scelerisque. Donec eget mi sit amet mi placerat maximus. Sed faucibus, diam a ultrices blandit, eros leo vulputate sapien, vitae semper tellus tellus lobortis metus. Donec hendrerit urna quis massa posuere luctus. Nam venenatis vehicula est ut efficitur. Proin at tortor hendrerit, ornare mauris eu, volutpat nulla. Proin mattis auctor neque, ut maximus neque bibendum a. Nulla eleifend enim lectus, vitae iaculis sapien pretium nec. Aenean ut malesuada elit, vitae euismod sem. </p>
        </div>
    )
}

export default Contact;