# typed: strict
# frozen_string_literal: true

require 'uri'
require 'open-uri'

module Quick
  class PR
    extend T::Sig

    class << self
      extend T::Sig

      sig { void }
      def open_pr_page
        remote_url = `git config --get remote.origin.url`.strip
        return if remote_url.empty?

        uri = URI.parse(remote_url)
        path = uri.path.chomp('.git')

        pr_url = "https://#{uri.host}#{path}/compare/main?expand=1"

        open_in_browser(pr_url)
      end

      private

      sig { params(url: String).void }
      def open_in_browser(url)
        case RUBY_PLATFORM
        when /darwin/
          system('open', url)
        when /linux|bsd/
          system('xdg-open', url)
        when /mswin|mingw/
          system('start', url)
        else
          puts "Could not open the browser automatically. Please open the following URL manually: #{url}"
        end
      end
    end
  end
end
