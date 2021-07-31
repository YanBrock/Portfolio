let header =
{
    input: document.querySelector(".header_input"),
    button: document.querySelector(".input_button"),
    userName: document.querySelector(".user_name"),
    logic: function()
    {
        console.log("clicked");
        console.log(this.input);
        console.log(this.userName);
        this.button.addEventListener("click", function() 
        {
            header.userName.innerHTML = header.input.value;
            header.input.value = "";
        });
    },
};

function init()
{
    header.logic();
}

init();