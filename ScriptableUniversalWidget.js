class ChristmasWidget
{
    async run()
    {
        let widget = await this.deployWidget();
        if (!config.runsInWidget) {
            widget.presentSmall();
        }
        Script.setWidget(widget);
        Script.complete();
    }

    async deployWidget()
    {
        let list = new ListWidget();
        list.setPadding(12, 12, 12, 12);

        let titleTxt = list.addText("📈 Bocki - Stats");
        titleTxt.font = Font.mediumSystemFont(20);

        list.addText("");
        var req = new Request('https://api.jsonstorage.net/v1/json/379e3331-1181-4d49-8e97-f814b24475a9/f9a04ce8-7244-4c36-a051-0c1baa9b48eb');
        let data = await req.loadJSON();
        let items = Object.keys(data);
        for( var x = 0 ; x < items.length ; x++ ){
            let item = items[x]
            let tempItem = list.addText(item + ": " + data[item])
            tempItem.textColor = Color.green();
            tempItem.font = Font.boldSystemFont(12);
        }
        return list
    }
}

new ChristmasWidget().run();
