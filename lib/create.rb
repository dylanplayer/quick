# typed: strict
# frozen_string_literal: true

require 'net/http'
require 'json'
require 'uri'
require 'fileutils'

require_relative 'clone'

module Quick
  class Create
    GITHUB_API_URL = 'https://api.github.com/user/repos'

    class << self
      def create_repository(name, is_private: false)
        token = `gh auth token`.strip
        uri = URI(GITHUB_API_URL)
        request = Net::HTTP::Post.new(uri)
        request['Authorization'] = "Bearer #{token}"
        request.body = { name:, private: is_private }.to_json

        response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
          http.request(request)
        end

        if response.is_a?(Net::HTTPSuccess)
          repo_url = JSON.parse(response.body)['clone_url']
          Clone.clone_repository(repo_url)
        else
          puts "Failed to create repository: #{response.message}"
        end
      end
    end
  end
end
