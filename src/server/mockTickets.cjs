const mockTickets = {
    searchId: 'mockSearchId',
    tickets: [
      {
        price: 13400,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-01T10:45:00.000Z',
            stops: ['HKG'],
            duration: 1295
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-15T08:00:00.000Z',
            stops: ['HKG'],
            duration: 810
          }
        ]
      },
      {
        price: 18200,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-01T11:20:00.000Z',
            stops: [],
            duration: 1230
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-15T17:50:00.000Z',
            stops: ['BKK'],
            duration: 700
          }
        ]
      },
      {
        price: 12400,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-01T10:45:00.000Z',
            stops: ['HKG'],
            duration: 780
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-15T08:00:00.000Z',
            stops: ['HKG', 'JNB'],
            duration: 1430
          }
        ]
      },
      {
        price: 13400,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-01T10:45:00.000Z',
            stops: ['HKG', 'JNB'],
            duration: 1295
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-15T08:00:00.000Z',
            stops: [],
            duration: 730
          }
        ]
      },
      {
        price: 21000,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-01-01T10:45:00.000Z',
            stops: ['DXB'],
            duration: 900
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-01-15T08:00:00.000Z',
            stops: ['DXB', 'BKK'],
            duration: 1200
          }
        ]
      },
      {
        price: 15500,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-02-01T08:30:00.000Z',
            stops: ['DXB', 'BKK'],
            duration: 1100
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-02-15T14:45:00.000Z',
            stops: ['DXB'],
            duration: 950
          }
        ]
      },
      {
        price: 19800,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-02-01T12:15:00.000Z',
            stops: ['HKG', 'BKK'],
            duration: 1400
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-02-15T18:30:00.000Z',
            stops: [],
            duration: 730
          }
        ]
      },
      {
        price: 14500,
        carrier: 'S7',
        segments: [
          {
            origin: 'MOW',
            destination: 'HKT',
            date: '2024-02-01T09:00:00.000Z',
            stops: [],
            duration: 1200
          },
          {
            origin: 'HKT',
            destination: 'MOW',
            date: '2024-02-15T15:20:00.000Z',
            stops: ['HKG'],
            duration: 850
          }
        ]
      },
    ],
    stop: false
  };

  module.exports = mockTickets;