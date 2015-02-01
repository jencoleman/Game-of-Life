function cell(a,b) {

this.column: a,
this.row: b,
this.id = a + "-" + b,
this.state: "deadCell",
this.itsAlive = function( a, b ) {
	
	var
	
	id = a + "-" + b,
	
	myCell = document.getElementById( id );
	
	myCell.className = "liveCell";
	
	this.state = "liveCell";

}

this.itsDead = function ( a, b ) {
	
	var
	
	id = a + "-" + b,
	
	myCell = document.getElementById( id );
	
	myCell.className = "deadCell";
	
	this.state = "deadCell";

}

this.setState = function() {		
	if ( this.state === "liveCell" && getLiveNeighborCells( a, b ) < 2 ) {
			
				this.state = "deadCell";
				
				itsDead( a, b );
				
			}

			if ( this.state === "liveCell" && getLiveNeighborCells( a,b ) > 3 ) {
			
				this.state = "deadCell";
				
				itsDead( a, b );
				
			}
	
			if ( this.state === "deadCell" && getLiveNeighborCells( a,b ) === 3 ) {
			
				this.state = "liveCell";
				
				itsAlive( a,b );
				
			}
			
		}
		
	}
	
}


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
