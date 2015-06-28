class MainController {

  constructor ($log, numberAbrvFilterFilter) {
    'ngInject';

    this.log = $log.log;
    this.numberAbrvFilter = numberAbrvFilterFilter;
    this.availableFieldCounts = [3,4,5,6,7,8,9,10];
    this.fieldCount = 3;
    this.fields = [];
    this.resetFields();
  }

  resetFields () {
    this.fields = [];
    for (var i = 0; i < this.fieldCount; i++) {
      this.fields.push({});
    }
  }

  add () {
    this.getTotal();
    this.rankFields();
  }

  getTotal () {
    var nTotal = this.fields.reduce((a, b) => {
      return {val:  (+a.val) + (+b.val)};
    }).val;

    this.total = this.numberAbrvFilter(nTotal);
  }

  rankFields () {
    var sortableList = this.fields.slice();

    sortableList.sort((a, b) => {
      return b.val - a.val;
    });

    sortableList.map((obj, index) => {
      obj.rank = '#' + (index + 1);
    });
  }

}

export default MainController;
