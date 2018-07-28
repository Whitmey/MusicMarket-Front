export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );
  this.transition(
    this.hasClass('scale-demo'),
    this.use('scale', { duration: 3000 })
  );
}
