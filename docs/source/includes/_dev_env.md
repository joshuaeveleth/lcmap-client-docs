# Development Environment

> Environment variable configuration:

```
TBD
```

> LCMAP client configuration file change:

```
TBD
```

> LCMAP client arguments:

```shell
# No client arguments for cURL
```

```python
Python: TBD
```

```vb
Julia: TBD
```

```clojure
Clojure: TBD
```

```ruby
Ruby: TBD
```

```r
R: TBD
```

If you wish to develop client libraries for the LCMAP system, it may be more convenient to run a local instance of the development environment. The steps required for this are the following:

* Install Cassandra, RabbitMQ, Mesos, and Leiningen
* Start Cassandra: ``cassandra -f``
* Set up Cassandra schemas [link TBD]
* Ingest sample data [link TBD]
* Set up Rabbit server, channels, and queues [link TBD]
* Start testing auth service: ``cd lcmap-rest/test/support/auth-server && lein run``
* Update the ``lcmap-rest/project.clj`` dev environment configuration setting for ``auth-server``
* Start lcmap-rest suite of services: ``cd lcmap-rest && lein with-profile dev run``

At this point you may develop against the lcmap-rest services you have running locally by configuring your client(s) to use the local service as the LCMAP REST endpoint. You can do this with environment variables or by editing the LCMAP client configuration file.

