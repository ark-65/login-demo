import {InMemoryDbService} from 'angular-in-memory-web-api';


export class UserDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Mr.Nice', password: 'qwerty' },
      { id: 2, name: 'Narco', password: 'adfghj'  },
      { id: 3, name: 'Bombasto', password: 'zcvbnm'  },
      { id: 4, name: 'Celeritas', password: 'wertyu'  },
      { id: 5, name: 'Magneta', password: 'sfghjk'  },
      { id: 6, name: 'RubberMan', password: 'xcvbnm,'  },
      { id: 7, name: 'Dynama', password: '123456'  },
      { id: 8, name: 'DrIQ', password: '234567'  },
      { id: 9, name: 'Magma', password: '345678'  },
      { id: 10, name: 'Tornado', password: '456789'  }
    ];
    return (users);
  }
}
