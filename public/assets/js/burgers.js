$(function () 
{
    // The event click handler
    $(".change-devour").on("click", event => {
        var id = $(event.currentTarget).data("id");
        var newDevour = $(event.currentTarget).data("newdevour");

        // Variabble to set state 
        var newDevourState = 
        {
            devoured: newDevour
        }

        // The ajax call to the burgers and the put request to change state
        $.ajax("/api/burgers/" + id, 
        {
            type: "PUT",
            data: newDevourState
        })
            .then( () =>
            {
                console.log("changed devoured to", newDevour);
                location.reload();
            })
    });

    // The event handler to add the burger
    $('.create-form').on('submit', event => 
    {
        event.preventDefault();
        
        // Variable to change the burger that has been devoured
        var addBurger = 
        {
            burger_name: $("#add").val().trim(),
            devoured: 1

        };

        // The ajax call to POST th new burger that was added
        $.ajax("/api/burgers", 
        {
                type: 'POST',
                data: addBurger
            })
            .then(
                () => 
                {
                    console.log("new burger created");
                    location.reload();
                }
            )

    });
});