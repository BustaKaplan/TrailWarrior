import React from 'react';

class DateComponent extends React.Component {

    render() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;

        return (

          today
        );
    }
}
export default DateComponent;
