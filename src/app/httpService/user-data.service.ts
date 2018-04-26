import {InMemoryDbService} from 'angular-in-memory-web-api';


export class UserDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'Mr.Nice', password: 'qwerty' },
      { id: 2, username: 'Narco', password: 'adfghj'  },
      { id: 3, username: 'Bombasto', password: 'zcvbnm'  },
      { id: 4, username: 'Celeritas', password: 'wertyu'  },
      { id: 5, username: 'Magneta', password: 'sfghjk'  },
      { id: 6, username: 'RubberMan', password: 'xcvbnm,'  },
      { id: 7, username: 'Dynama', password: '123456'  },
      { id: 8, username: 'DrIQ', password: '234567'  },
      { id: 9, username: 'Magma', password: '345678'  },
      { id: 10, username: 'Tornado', password: '456789'  }
    ];
    return (users);
  }
}
