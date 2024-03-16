# typed: strict
# frozen_string_literal: true

require 'fileutils'
require 'uri'

module Quick
  class Clone
    class << self
      extend T::Sig

      sig { params(url: String).void }
      def clone_repository(url)
        uri = URI.parse(url)
        path_segments = uri.path.split('/')
        github_username = path_segments[1]
        github_reponame = path_segments[2].gsub('.git', '')

        dest_dir = File.expand_path("~/src/#{github_username}/#{github_reponame}")

        if Dir.exist?(dest_dir) && !Dir.empty?(dest_dir)
          puts "Error: Destination path '#{dest_dir}' already exists and is not an empty directory."
          return
        end

        FileUtils.mkdir_p(dest_dir)

        puts "Cloning into #{dest_dir}..."
        puts "cd '#{dest_dir}'" if system("git clone #{url} #{dest_dir}")
      end
    end
  end
end
