import { Injectable } from '@angular/core';

@Injectable()
export class ThingsService {

  private data = [
    { name: 'Thing 1', rating: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel augue semper enim placerat pellentesque. Nulla et justo enim. Curabitur iaculis et enim ut rhoncus. Phasellus pretium, massa vel placerat porta, eros tortor viverra tellus, eu placerat libero quam vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fringilla, quam a vehicula vulputate, arcu urna commodo diam, ac ultrices nulla diam vel purus. Proin quis ipsum id turpis cursus venenatis. Aliquam vel porta felis. Sed vel nulla libero. Etiam in ante vitae lorem consectetur tincidunt id at mauris."},
    { name: 'Thing 2', rating: 2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel augue semper enim placerat pellentesque. Nulla et justo enim. Curabitur iaculis et enim ut rhoncus. Phasellus pretium, massa vel placerat porta, eros tortor viverra tellus, eu placerat libero quam vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fringilla, quam a vehicula vulputate, arcu urna commodo diam, ac ultrices nulla diam vel purus. Proin quis ipsum id turpis cursus venenatis. Aliquam vel porta felis. Sed vel nulla libero. Etiam in ante vitae lorem consectetur tincidunt id at mauris."},
    { name: 'Thing 3', rating: 7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel augue semper enim placerat pellentesque. Nulla et justo enim. Curabitur iaculis et enim ut rhoncus. Phasellus pretium, massa vel placerat porta, eros tortor viverra tellus, eu placerat libero quam vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fringilla, quam a vehicula vulputate, arcu urna commodo diam, ac ultrices nulla diam vel purus. Proin quis ipsum id turpis cursus venenatis. Aliquam vel porta felis. Sed vel nulla libero. Etiam in ante vitae lorem consectetur tincidunt id at mauris."},
    { name: 'Thing 4', rating: 9, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel augue semper enim placerat pellentesque. Nulla et justo enim. Curabitur iaculis et enim ut rhoncus. Phasellus pretium, massa vel placerat porta, eros tortor viverra tellus, eu placerat libero quam vitae sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris fringilla, quam a vehicula vulputate, arcu urna commodo diam, ac ultrices nulla diam vel purus. Proin quis ipsum id turpis cursus venenatis. Aliquam vel porta felis. Sed vel nulla libero. Etiam in ante vitae lorem consectetur tincidunt id at mauris."},
  ]

  constructor() { }

  getAll(){
    return this.data;
  }

  getThing(index){
    return this.data[index - 1];
  }

}
