// keep a reference to the document
var doc = app.activeDocument
var savedActiveLayer = doc.activeLayer
var inputsValid = false

// // creating a dialog with okay button
// var dlg = new Window('dialog', 'Display AD Sizes!',[100,100,480,250]);
// dlg.btnPnl = dlg.add('panel', [25,15,365,125], 'Please give your project a name');
// dlg.btnPnl.testBtn = dlg.btnPnl.add('button', [15,30,305,50], 'Finished', {name:'ok'});
// dlg.btnPnl.testBtn.onClick = dobuild;
// dlg.show();
// function dobuild() {
//     //alert("type something?");
//     dlg.close();
// }

// *************************
// basic input prompt
// *************************

var projectDir = "~/Desktop/advertising/"
var projectName =prompt("新しいプロジェクトの名前は？","","Input a project name")
var maxSize =  131072

var folder1 = Folder(projectDir + projectName)
if(!folder1.exists) {
	folder1.create()
	inputsValid = true
} else {
	alert("This folder already exists, please select a different folder.")
};



//inputsValid = false


if (inputsValid) {
//START OF OPERATION CODE

	// *************************
	// CREATE A FLAT LAYER
	// *************************

	var layerSet = doc.layerSets.add()
	layerSet.name = 'mergedAll'

	// add all layers
	for (var l = (doc.artLayers.length-1); l>=0 ; l--) {
		var layer = doc.artLayers[l]
		if (layer.visible) {
			layer.duplicate(layerSet, ElementPlacement.INSIDE)
		};
	};

	// add all groups
	for (var s = (doc.layerSets.length - 1); s >= 0; s--) {
		if (doc.layerSets[s].name != "Guides" && doc.layerSets[s].name != "mergedAll" && doc.layerSets[s].visible) {
		 	//alert(doc.layerSets[s].name)
			var newGroup = doc.layerSets[s].duplicate()
			var newLayer = newGroup.merge()
			newLayer.move(layerSet, ElementPlacement.INSIDE)
		};
	};

	var mergedLayer = layerSet.merge()
	mergedLayer.name = projectName
	doc.activeLayer = mergedLayer

	// *************************
	// SAVE each layer as per settings
	// *************************

	var saveSet = [{
		x: 50,
		y: 50,
		xSize: 120,
		ySize: 600,
		type: "Skyscraper"
	}, {
		x: 220,
		y: 50,
		xSize: 160,
		ySize: 600,
		type: "Skyscraper"
	}, {
		x: 50,
		y: 700,
		xSize: 300,
		ySize: 600,
		type: "Skyscraper"
	}, {
		x: 430,
		y: 700,
		xSize: 300,
		ySize: 1050,
		type: "Skyscraper"
	}, {
		x: 816,
		y: 190,
		xSize: 468,
		ySize: 60,
		type: "Banner"
	}, {
		x: 816,
		y: 50,
		xSize: 728,
		ySize: 90,
		type: "Banner"
	}, {
		x: 816,
		y: 440,
		xSize: 930,
		ySize: 180,
		type: "Banner"
	}, {
		x: 816,
		y: 300,
		xSize: 970,
		ySize: 90,
		type: "Banner"
	}, {
		x: 816,
		y: 700,
		xSize: 970,
		ySize: 250,
		type: "Banner"
	}, {
		x: 816,
		y: 1000,
		xSize: 980,
		ySize: 120,
		type: "Banner"
	}, {
		x: 816,
		y: 1170,
		xSize: 200,
		ySize: 200,
		type: "Rect"
	}, {
		x: 50,
		y: 1420,
		xSize: 240,
		ySize: 400,
		type: "Rect"
	}, {
		x: 816,
		y: 1420,
		xSize: 250,
		ySize: 250,
		type: "Rect"
	}, {
		x: 1116,
		y: 1170,
		xSize: 250,
		ySize: 360,
		type: "Rect"
	}, {
		x: 430,
		y: 50,
		xSize: 300,
		ySize: 250,
		type: "Rect"
	}, {
		x: 430,
		y: 350,
		ySize: 280,
		xSize: 336,
		type: "Rect"
	}, {
		x: 1416,
		y: 1170,
		xSize: 580,
		ySize: 400,
		type: "Rect"
	}, {
		x: 400,
		y: 2100,
		xSize: 300,
		ySize: 50,
		type: "Mobile"
	}, {
		x: 400,
		y: 2000,
		xSize: 320,
		ySize: 50,
		type: "Mobile"
	}, {
		x: 400,
		y: 2200,
		xSize: 320,
		ySize: 100,
		type: "Mobile"
	}, {
		x: 50,
		y: 2000,
		xSize: 300,
		ySize: 250,
		type: "Mobile"
	}, {
		x: 50,
		y: 2550,
		xSize: 1200,
		ySize: 628,
		type: "Facebook"
	}, {
		x: 50,
		y: 3228,
		xSize: 1080,
		ySize: 1080,
		type: "Instagram"
	}, {
		x: 1180,
		y: 3228,
		xSize: 1080,
		ySize: 1080,
		type: "Instagram2"
	}, {
		x: 50,
		y: 4358,
		xSize: 1080,
		ySize: 1080,
		type: "Instagram3"
	}, {
		x: 1180,
		y: 4358,
		xSize: 1080,
		ySize: 1080,
		type: "Instagram4"
	}, {
		x: 50,
		y: 5488,
		xSize: 1080,
		ySize: 1080,
		type: "Instagram5"
	}, {
		x: 50,
		y: 6618,
		xSize: 600,
		ySize: 600,
		type: "Facebook"
	}, {
		x: 700,
		y: 6618,
		xSize: 600,
		ySize: 600,
		type: "Facebook2"
	}, {
		x: 1350,
		y: 6618,
		xSize: 600,
		ySize: 600,
		type: "Facebook3"
	}, {
		x: 50,
		y: 7268,
		xSize: 600,
		ySize: 600,
		type: "Facebook4"
	}, {
		x: 700,
		y: 7268,
		xSize: 600,
		ySize: 600,
		type: "Facebook5"
	}]

	// activate layer
	var ogLayer = doc.activeLayer;
	doc.activeLayer = ogLayer;

	// use pixels
	if (app.preferences.rulerUnits != Units.PIXELS) app.preferences.rulerUnits = Units.PIXELS;

	for (var i = 0; i < saveSet.length; i++){  //

		var x = saveSet[i].x
		var y = saveSet[i].y
		var xz = saveSet[i].xSize
		var yz = saveSet[i].ySize
		var t = saveSet[i].type.toString()
		//var filename = saveSet[i].type + xz.toString() + "x" + yz.toString() + "-" + x.toString() + "-" + y.toString() + ".jpg"
		var filename = t + xz.toString() + "x" + yz.toString() + ".jpg"

		// make selection
		doc.selection.select(Array(
			Array(x, y),
			Array(x, y + yz),
			Array(x + xz, y + yz),
			Array(x + xz, y)
			),SelectionType.REPLACE, 0, false);

		// copy and create new file
		doc.selection.copy()
		var doc2 = app.documents.add(saveSet[i].xSize, saveSet[i].ySize)
		doc2.paste()

		// //copy and create new layer
		// doc.selection.copy()
		// doc.artLayers.add()
		// doc.selection.deselect()
		// doc.paste()
		// var newLayer = doc.activeLayer;

		// //move layer to correct spot
		// var localPosition = newLayer.bounds
		// localPosition[0] = x - newLayer.bounds[0]
		// localPosition[1] = y - newLayer.bounds[1]
		// newLayer.translate(-localPosition[0],-localPosition[1])

		// //rename new layer
		// newLayer.name = "Skyscraper120x600"

		//save layer
		var destFile = new File (projectDir + projectName + "/" + filename)
		var q = 100
		docExportOptions = new ExportOptionsSaveForWeb 
		docExportOptions.format = SaveDocumentType.JPEG
		// docExportOptions.transparency = false
		// docExportOptions.blur = 0.0 
		// docExportOptions.includeProfile = false 
		// docExportOptions.interlaced = false 
		docExportOptions.optimized = true 
		docExportOptions.quality = q 
		doc2.exportDocument (destFile, ExportType.SAVEFORWEB, docExportOptions)

		if (!t.indexOf('Facebook') !== -1 && !t.indexOf('Instagram') !== -1) {
			while (destFile.length > maxSize) {
				q = q - 5
				//alert(filename + " is too big (" + destFile.length.toString() + "): reducing quality to " + q)
				destFile.remove()
				destFile = new File (projectDir + projectName + "/" + filename)			
				docExportOptions.quality = q 
				// docExportOptions.PNG8 = false 
				//doc2.saveAs(destfile, docExportOptions, true, Extension.LOWERCASE)
				app.activeDocument = doc2
				doc2.exportDocument (destFile, ExportType.SAVEFORWEB, docExportOptions)
			};
		};


		// close second document
		doc2.close(SaveOptions.DONOTSAVECHANGES)

		// go back to og doc
		app.activeDocument = doc

	};

//END OF OPERATION CODE
};

alert("終わりました！ -->  /Desktop/advertising/")