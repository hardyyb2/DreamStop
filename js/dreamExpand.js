const handleEditDream = (selectedDream, id) => {
    let = `
    
    <div class="form card">
    <div class="dream-type dream-desc"></div>
    <div class="row">
        <form autocomplete="off" class="col s12">
            <div class="row">
                <div class="input-field col s12 title">
                    <input id="input_text" class="validate" type="text" data-length="30" maxlength="30"
                        name="title">
                    <label for="input_text" data-error="Please fill out the title">Title</label>
                    <span class="helper-text" data-error="Please Enter the title" data-success="right"></span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12 details">
                    <textarea id="textarea2" class="materialize-textarea" data-length="300" maxlength="300"
                        name="details"></textarea>
                    <label for="textarea2">Details</label>
                </div>
            </div>
        </form>
    </div>
</div>
`
}