var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(),
    KeyedMessage = kafka.KeyedMessage,
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message');
// Create topics sync


producer.on('ready', function () {
    producer.createTopics(['topic1','topic2'], true, function (err, data) {
        var HighLevelConsumer = kafka.HighLevelConsumer;
        var consumer = new HighLevelConsumer(
            client,
            [
                { topic: 'topic1' }, { topic: 'topic2' }
            ],
            {
                groupId: 'my-group'
            }
        );
        consumer.on('message',function(message){
            console.log('received:', message)
        });

        var payloads = [
            {topic: 'topic1', messages: 'hi', partition: 0},
            {topic: 'topic2', messages: ['hello', 'world', km]}
        ];
        console.log('here');
        producer.send(payloads, function (err, data) {
            console.log(data);
        });

    });
});


producer.on('error', function (err) {});

