var cellArray = [];

var createArrayGrid = function() {

	var
	
	elem = document.getElementById( "grid" ),
	
	content = "";
	
	for ( var i = 0; i < 40; i++ ) {
	
		content += "<div id=\"c" + i + "\" class=\"column\">";
		
		cellArray[i] = [];
		
		for ( var z = 0; z < 20; z++ ) {
	
			content += "<div id=\"" + i + "-" + z + "\"class=\"deadCell\" onclick=\"changeCell()\">" + "</div>";

			cellArray[i][z] = "deadCell";
			
		}
		
		content += ( "</div>" );
		
	}
	
	elem.innerHTML = content;
	
}

// Change cell class to live
var itsAlive = function( a, b ) {
	
	var
	
	id = a + "-" + b,
	
	myCell = document.getElementById( id );
	
	myCell.className = "liveCell";
	
	cellArray[a][b] = "liveCell";

}
	
// Start grid with acorn
var acornAlive = function(){
	
	itsAlive( 2, 2 );
	
	itsAlive( 2, 4 );
	
	itsAlive( 1, 4 );
	
	itsAlive( 4, 3 );
	
	itsAlive( 5, 4 );
	
	itsAlive( 6, 4 );
	
	itsAlive( 7, 4 );
	
	itsAlive( 3, 5 );
	
	itsAlive( 4, 5 );
	
	itsAlive( 3, 2 );
	
}

// Change cell class to dead
var itsDead = function( a, b ) {
	
	var
	
	id = a + "-" + b,
	
	myCell = document.getElementById( id );
	
	myCell.className = "deadCell";
	
	cellArray[a][b] = "deadCell";

}
	
// Count how many neighbors are live
var getLiveNeighborCells = function( a, b ) {

	var liveCounter = 0;

	if ( cellArray[a-1] !== undefined && cellArray[a-1][b] !== undefined ) {
	
		if ( cellArray[a-1][b] === "liveCell" ) {
		
			liveCounter++;
			
		}
		
	}
	
	if ( cellArray[a-1] !== undefined && cellArray[a-1][b-1] !== undefined ) {
	
		if ( cellArray[a-1][b-1] === "liveCell" ) {
		
			liveCounter++;
		
		}
		
	}
	
	if ( cellArray[a] !== undefined && cellArray[a][b-1] !== undefined ) {
	
		if ( cellArray[a][b-1] === "liveCell" ) {
		
			liveCounter++;
			
		}
		
	}
	
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b-1] !== undefined ) {
	
		if ( cellArray[a+1][b-1] === "liveCell" ) {
		
			liveCounter++;
		
		}
		
	}
	
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b] !== undefined ) {
	
		if ( cellArray[a+1][b] === "liveCell" ) {
		
			liveCounter++;
			
		}
		
	}
	
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b+1] !== undefined ) {
	
		if ( cellArray[a+1][b+1] === "liveCell" ) {
		
			liveCounter++;
		
		}
		
	}
	
	if ( cellArray[a] !== undefined && cellArray[a][b+1] !== undefined ) {
	
		if ( cellArray[a][b+1] === "liveCell" ) {
		
			liveCounter++;
		
		}
		
	}
	
	if ( cellArray[a-1] !== undefined && cellArray[a-1][b+1] !== undefined ) {
	
		if ( cellArray[a-1][b+1] === "liveCell" ) {
		
			liveCounter++;
			
		}
		
	}
	
	return liveCounter;
	
	}

// setInterval variable
var myRun;

// Run function
var running = function() {

	myRun = setInterval( "refreshGrid()", 1000 );

}

// Stop function
var stop = function() {

	clearInterval( myRun );
	
}

 
// Refresh function
var refreshGrid = function() {

	for ( i = 0; i < 40; i++ ) {

		for ( z = 0; z < 20; z++ ) {

			if ( cellArray[i][z] === "liveCell" && getLiveNeighborCells( i, z ) < 2 ) {
			
				cellArray[i][z] = "deadCell";
				
				itsDead( i, z );
				
			}

			if ( cellArray[i][z] === "liveCell" && getLiveNeighborCells( i, z ) > 3 ) {
			
				cellArray[i][z] = "deadCell";
				
				itsDead( i, z );
				
			}
	
			if ( cellArray[i][z] === "deadCell" && getLiveNeighborCells( i,z ) === 3 ) {
			
				cellArray[i][z] = "liveCell";
				
				itsAlive( i, z );
				
			}
			
		}
		
	}
	
}