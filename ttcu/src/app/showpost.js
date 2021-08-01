// $(function(){
//     // Basic Setup
//     var $tableSel = $('#oTable');
//     $tableSel.dataTable({
//       'aaData': dummyData,
//       'aoColumns': [
//         {'mData': 'name'},
//         {'mData': 'registered'}
//       ],
//       'sDom': '' // Hiding the datatables ui
//     });
    
//     $('#filter').on('click', function(e){
//       e.preventDefault();
//       var startDate = $('#start').val(),
//           endDate = $('#end').val();
      
//       filterByDate(1, startDate, endDate); // We call our filter function
      
//       $tableSel.dataTable().fnDraw(); // Manually redraw the table after filtering
//     });
    
//     // Clear the filter. Unlike normal filters in Datatables,
//     // custom filters need to be removed from the afnFiltering array.
//     $('#clearFilter').on('click', function(e){
//       e.preventDefault();
//       $.fn.dataTableExt.afnFiltering.length = 0;
//       $tableSel.dataTable().fnDraw();
//     });
    
//   });
  
//   /* Our main filter function
//    * We pass the column location, the start date, and the end date
//    */
//   var filterByDate = function(column, startDate, endDate) {
//     // Custom filter syntax requires pushing the new filter to the global filter array
//           $.fn.dataTableExt.afnFiltering.push(
//                  function( oSettings, aData, iDataIndex ) {
//                      var rowDate = normalizeDate(aData[column]),
//                 start = normalizeDate(startDate),
//                 end = normalizeDate(endDate);
            
//             // If our date from the row is between the start and end
//             if (start <= rowDate && rowDate <= end) {
//               return true;
//             } else if (rowDate >= start && end === '' && start !== ''){
//               return true;
//             } else if (rowDate <= end && start === '' && end !== ''){
//               return true;
//             } else {
//               return false;
//             }
//           }
//           );
//       };
  
//   // converts date strings to a Date object, then normalized into a YYYYMMMDD format (ex: 20131220). Makes comparing dates easier. ex: 20131220 > 20121220
//   var normalizeDate = function(dateString) {
//     var date = new Date(dateString);
//     var normalized = date.getFullYear() + '' + (("0" + (date.getMonth() + 1)).slice(-2)) + '' + ("0" + date.getDate()).slice(-2);
//     return normalized;
//   }
  
//   // Filler data for demo (thanks to http://json-generator.com)
//   var dummyData = [
//       {
//           "name": "Chasity Stanton",
//           "registered": "1992-08-12"
//       },
//       {
//           "name": "Mcgowan Vance",
//           "registered": "2010-06-25"
//       },
//       {
//           "name": "Craig Hill",
//           "registered": "1992-08-11"
//       },
//       {
//           "name": "Lois Elliott",
//           "registered": "2003-02-22"
//       },
//       {
//           "name": "Gross Frost",
//           "registered": "2005-09-02"
//       },
//       {
//           "name": "Debra Emerson",
//           "registered": "2003-05-29"
//       },
//       {
//           "name": "Leona Wilkinson",
//           "registered": "1991-01-22"
//       },
//       {
//           "name": "Elena Puckett",
//           "registered": "1996-06-21"
//       },
//       {
//           "name": "Mcintosh Hudson",
//           "registered": "1992-12-13"
//       }
//   ];

/*:@*/



/* pay attention: file input for one input*/
/* console.clear();

const fileManager = document.querySelector('[js-file-manager]');

class FileManager {
  static chipTemplate = (text, id) => {
    return `<span id="${id}" class="chip"><span class="chip__text">${text}</span></span>`;
  }
  
  static generateId = () => {
    return `chip-${(Math.random()*0xFFFFFF<<0).toString(16)}`;
  }

  constructor(containerElement) {
    this._containerElement = containerElement;
    this._fakeInput = this._containerElement.querySelector('[js-fake-file-input]');
    this._realInput = this._containerElement.querySelector('[js-real-file-input]');
    this._chipContainer = this._containerElement.querySelector('[js-chip-container]');
    this._noFile = this._containerElement.querySelector('[js-no-file]');
    this._removeFilesButton = this._containerElement.querySelector('[js-remove-files]');
    
    this._files = [];
    
    this._addEventListeners();
  }

  _addEventListeners = () => {
    this._fakeInput.addEventListener('click', this._handleFakeInputClick, false);
    this._realInput.addEventListener('change', this._handleRealInputChange, false);
    this._removeFilesButton.addEventListener('click', this._handleRemoveFilesButtonClick, false);
  }
  
  _handleFakeInputClick = () => {
    if (this._chipContainer.querySelectorAll('.chip').length > 0) {
      this._removeChips();
    }
    
    this._realInput.click();
  }
  
  _handleRealInputChange = (e) => {
    if (this._realInput.files.length > 0) {
      this._toggleNoFile();
      [...this._realInput.files].forEach(file => {
        const name = file.name;
        const id = FileManager.generateId();
        const chipTemplate = FileManager.chipTemplate(name, id);
        
        this._chipContainer.insertAdjacentHTML('beforeend', chipTemplate);
        
        const chip = this._chipContainer.querySelector(`#${id}`);
        
        const filesObj = { name, id, chip: chip };
        
        this._files.push(filesObj);
      })
    }
  }
  
  _handleRemoveFilesButtonClick = (e) => {
    if (this._realInput.files.length) {
      this._removeChips();
    }
  }
  
  _removeChips = () => {
    const chips = [...this._chipContainer.querySelectorAll('.chip')];
    this._toggleNoFile();
    this._files = [];
    this._chipContainer.innerHTML = '';
    this._realInput.value = '';
  }

  _toggleNoFile = () => {
    this._noFile.hidden = !this._noFile.hidden;
    this._removeFilesButton.hidden = !this._removeFilesButton.hidden;
  }
}

const fileManagerReference = new FileManager(fileManager);*/

