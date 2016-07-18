/// <reference path="fruit.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
module FruitApplication {
    import Rest = FruitApplication.Rest;
    import ngr = ng.resource;

    FruitEditor.fruitModule.factory('fruitDataService', ['$resource', (r) => {
        return new FruitDataService(r);
    }]);

    interface IFruitResource extends ngr.IResourceClass<Rest.Fruit> {
        create(fruit: Rest.Fruit, success: Function);
    }

    export class FruitDataService {
        private resource: IFruitResource;
        private currentData: Array<Rest.Fruit>;
        private onUpdate: (fruits: Array<Rest.Fruit>) => void;
        constructor($resource: ngr.IResourceService) {
            this.resource = <IFruitResource><any>$resource("http://localhost:50351/api/Fruit/:id", { id: '@id' },
                {
                    get: { method: 'GET' },
                    save: { method: 'PUT' },
                    query: { method: 'GET', isArray: true },
                    delete: { method: 'DELETE' },
                    create: { method: 'POST' }
                });
            this.retriveAllFruits();
        }

        public setUpdateHandler(evHandler: (fruits: Array<Rest.Fruit>) => void) {
            this.onUpdate = evHandler;
        }

        public retriveAllFruits() {
            return this.resource.query().$promise.then((results) => {
                this.currentData = results;
                this.onUpdate(this.currentData);
            });
        }
        public updateFruit(fruit: Rest.Fruit) {
            this.resource.save(fruit, () => this.retriveAllFruits());
        }

        public addFruit(fruit: Rest.Fruit) {
            this.resource.create(fruit, () => this.retriveAllFruits());
        }

        public deleteFruit(id: number) {
            this.resource.delete({ Id : id }, () => this.retriveAllFruits());
        }
    }
}